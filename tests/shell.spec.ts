import { expect, test } from '@playwright/test';

test('home renders in Australian English with one h1', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en-AU');
  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
});

test('home has no horizontal scroll at 360px', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 740 });
  await page.goto('/');
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  expect(overflow).toBe(0);
});

test('the Spanish version is gone from the build', async ({ page }) => {
  // In production `.htaccess` redirects /es/ to /; the static build simply has no page there.
  const response = await page.goto('/es/');
  expect(response?.status()).toBe(404);
});

test('mobile menu opens, closes with Escape and closes on link click', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 740 });
  await page.goto('/');
  const button = page.locator('button[aria-controls="mobile-menu"]');
  const menu = page.locator('#mobile-menu');

  await expect(button).toHaveAttribute('aria-expanded', 'false');
  await expect(menu).toBeHidden();
  // On mobile the header CTA lives inside the menu, not in the bar.
  await expect(
    page.getByRole('banner').locator('> div').getByRole('link', { name: /Book a call/ }),
  ).toBeHidden();

  await button.click();
  await expect(button).toHaveAttribute('aria-expanded', 'true');
  await expect(menu).toBeVisible();

  await page.keyboard.press('Escape');
  await expect(menu).toBeHidden();
  await expect(button).toBeFocused();

  await button.click();
  await menu.getByRole('link', { name: 'Work', exact: true }).click();
  await expect(menu).toBeHidden();
  await expect(page).toHaveURL(/#work$/);
});

test('skip link moves focus to the main content', async ({ page, isMobile }) => {
  // The skip link serves keyboard users; the touch emulation has no sequential
  // keyboard navigation. Desktop Chromium and Firefox cover it.
  test.skip(isMobile, 'keyboard navigation is not emulated on touch devices');
  await page.goto('/');
  await page.keyboard.press('Tab');
  const skipLink = page.getByRole('link', { name: 'Skip to content' });
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeVisible();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
});

test('unknown routes return the 404 page', async ({ page }) => {
  const response = await page.goto('/does-not-exist');
  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('This page doesn’t exist.');
});
