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

test('the Spanish version is gone from the build', async ({ request }) => {
  // The static build has no page there (404); in production `.htaccess` redirects /es/ to / (301).
  const response = await request.get('/es/', { maxRedirects: 0 });
  if (response.status() === 301) {
    expect(new URL(response.headers()['location'], response.url()).pathname).toBe('/');
  } else {
    expect(response.status()).toBe(404);
  }
});

test.describe('privacy policy', () => {
  test('is reachable from the footer, indexable, dated and has no horizontal scroll', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 740 });
    await page.goto('/');
    await page.locator('footer').getByRole('link', { name: 'Privacy Policy' }).click();
    await expect(page).toHaveURL(/\/privacy\/$/);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Privacy Policy');
    await expect(page.locator('main time')).toHaveAttribute('datetime', /^\d{4}-\d{2}-\d{2}$/);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /\/privacy\/$/);
    await expect(page.locator('meta[name="robots"]')).toHaveCount(0);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBe(0);
  });

  test('names the providers the site really uses', async ({ page }) => {
    await page.goto('/privacy/');
    for (const provider of ['Formspree', 'Hostinger', 'Calendly']) {
      await expect(page.getByRole('main')).toContainText(provider);
    }
  });

  test('header links go back to the home sections', async ({ page, isMobile }) => {
    test.skip(isMobile, 'the desktop menu; an emulated phone stretched to 1280px is not a real device');
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/privacy/');
    await page.getByRole('banner').getByRole('link', { name: 'Work', exact: true }).first().click();
    await expect(page).toHaveURL(/\/#work$/);
    await expect(page.locator('#work')).toBeVisible();
  });

  test('the contact form links to it', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#contact form').getByRole('link', { name: 'Privacy Policy' })).toHaveAttribute(
      'href',
      '/privacy/',
    );
  });

  test('is listed in the sitemap', async ({ request }) => {
    expect(await (await request.get('/sitemap.xml')).text()).toContain('/privacy/');
  });
});

test('prices read "from AUD" with a space in the page text', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#services')).not.toContainText('fromAUD');
  expect(await page.locator('#services').textContent()).toContain('from AUD');
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
