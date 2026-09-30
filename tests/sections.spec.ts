import { expect, test, type Page } from '@playwright/test';

const formspree = 'https://formspree.io/**';

/** Opens a page and waits until the contact form is hydrated (see ContactForm). */
async function openContactForm(page: Page, path = '/') {
  await page.goto(path);
  const form = page.locator('#contact form');
  await expect(form).toHaveAttribute('data-ready', '');
  return form;
}

async function fillValidForm(page: Page) {
  const form = await openContactForm(page);
  await form.getByLabel('Name').fill('Ada Lovelace');
  await form.getByLabel('Email').fill('ada@example.com');
  await form.getByLabel('What do you need?').selectOption('Website');
  await form.getByLabel('Project details').fill('A five page site for my bakery.');
  return form;
}

test.describe('hero', () => {
  for (const path of ['/', '/es/']) {
    for (const viewport of [
      { width: 360, height: 740 },
      { width: 1440, height: 900 },
    ]) {
      test(`${path} shows badge, h1, lead and both CTAs without scrolling at ${viewport.width}px`, async ({
        page,
      }) => {
        await page.setViewportSize(viewport);
        await page.goto(path);
        const hero = page.locator('section[aria-labelledby="hero-title"]');
        const parts = [
          hero.locator('p').first(),
          hero.getByRole('heading', { level: 1 }),
          hero.locator('p').nth(1),
          hero.getByRole('link').first(),
          hero.getByRole('link').nth(1),
        ];
        for (const part of parts) {
          const box = await part.boundingBox();
          expect(box, 'element is rendered').not.toBeNull();
          expect(box!.y + box!.height).toBeLessThanOrEqual(viewport.height);
        }
        // The availability badge is a pill: it must stay on one line.
        const badge = await parts[0].boundingBox();
        expect(badge!.height).toBeLessThan(40);
      });
    }
  }
});

test.describe('reveal', () => {
  test('a section fades in once it is scrolled into view', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    const contact = page.locator('#contact');
    await expect(contact).not.toHaveClass(/is-visible/);
    await contact.scrollIntoViewIfNeeded();
    await expect(contact).toHaveClass(/is-visible/);
    await expect(contact).toHaveCSS('opacity', '1');
  });

  test('content is visible without JavaScript', async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto('/');
    await expect(page.locator('#contact')).toHaveCSS('opacity', '1');
    await context.close();
  });

  test('nothing is hidden with reduced motion', async ({ browser }) => {
    const context = await browser.newContext({ reducedMotion: 'reduce' });
    const page = await context.newPage();
    await page.goto('/');
    await expect(page.locator('#contact')).toHaveCSS('opacity', '1');
    await context.close();
  });
});

test.describe('work', () => {
  test('shows 3 concept projects, the first one featured', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    const cards = page.locator('#work > ul > li');
    await expect(cards).toHaveCount(3);
    for (const card of await cards.all()) {
      await expect(card).toContainText('Concept');
    }
    const [first, second] = await Promise.all([cards.nth(0).boundingBox(), cards.nth(1).boundingBox()]);
    expect(first!.width).toBeGreaterThan(second!.width * 1.8);
  });

  test('demo links open a new tab and say so', async ({ page }) => {
    await page.goto('/');
    const links = page.locator('#work').getByRole('link', { name: /View live demo/ });
    await expect(links).toHaveCount(3);
    for (const link of await links.all()) {
      await expect(link).toHaveAttribute('target', '_blank');
      await expect(link).toHaveAttribute('rel', /noopener/);
      await expect(link).toHaveAccessibleName(/opens in a new tab/);
    }
  });
});

test.describe('contact form', () => {
  test('empty submit shows every error and focuses the first field', async ({ page }) => {
    let requests = 0;
    await page.route(formspree, (route) => {
      requests++;
      return route.fulfill({ status: 200, json: { ok: true } });
    });
    const form = await openContactForm(page);
    await form.getByRole('button', { name: 'Send message' }).click();

    for (const [label, message] of [
      ['Name', 'Please enter your name.'],
      ['Email', 'Please enter your email.'],
      ['What do you need?', 'Please choose an option.'],
      ['Project details', 'Please tell me a bit about your project.'],
    ]) {
      const field = form.getByLabel(label);
      await expect(field).toHaveAttribute('aria-invalid', 'true');
      await expect(field).toHaveAccessibleDescription(message);
    }
    await expect(form.getByLabel('Name')).toBeFocused();
    expect(requests).toBe(0);
  });

  test('an invalid email is rejected, and the error clears on edit', async ({ page }) => {
    const form = await fillValidForm(page);
    const email = form.getByLabel('Email');
    await email.fill('not-an-email');
    await form.getByRole('button', { name: 'Send message' }).click();
    await expect(email).toHaveAccessibleDescription('Please enter a valid email address.');
    await expect(email).toBeFocused();
    await email.fill('ada@example.com');
    await expect(email).not.toHaveAttribute('aria-invalid');
  });

  test('a valid submission posts to Formspree and shows the success state', async ({ page }) => {
    let body = '';
    await page.route(formspree, (route) => {
      body = route.request().postData() ?? '';
      return route.fulfill({ status: 200, json: { ok: true } });
    });
    const form = await fillValidForm(page);
    await form.getByRole('button', { name: 'Send message' }).click();

    const heading = page.getByRole('heading', { name: 'Thanks, your message is in.' });
    await expect(heading).toBeVisible();
    await expect(heading).toBeFocused();
    expect(body).toContain('Ada Lovelace');
    expect(body).toContain('Website');
  });

  test('a server error shows the error state with the email address', async ({ page }) => {
    await page.route(formspree, (route) => route.fulfill({ status: 500, json: { error: 'boom' } }));
    const form = await fillValidForm(page);
    await form.getByRole('button', { name: 'Send message' }).click();
    const alert = form.getByRole('alert');
    await expect(alert).toContainText('could not be sent');
    await expect(alert.getByRole('link', { name: 'gonzaloemurua96@gmail.com' })).toHaveAttribute(
      'href',
      'mailto:gonzaloemurua96@gmail.com',
    );
  });

  test('a network failure shows the error state', async ({ page }) => {
    await page.route(formspree, (route) => route.abort('internetdisconnected'));
    const form = await fillValidForm(page);
    await form.getByRole('button', { name: 'Send message' }).click();
    await expect(form.getByRole('alert')).toBeVisible();
    await expect(form.getByRole('button', { name: 'Send message' })).toBeEnabled();
  });

  test('without JavaScript the form still posts to Formspree with native validation', async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto('/');
    const form = page.locator('#contact form');
    await expect(form).toHaveAttribute('action', /^https:\/\/formspree\.io\/f\//);
    await expect(form).toHaveAttribute('method', /post/i);
    await expect(form.getByLabel('Name')).toHaveAttribute('required', '');
    await context.close();
  });

  test('errors are in Spanish on /es', async ({ page }) => {
    const form = await openContactForm(page, '/es/');
    await form.getByRole('button', { name: 'Enviar mensaje' }).click();
    await expect(form.getByLabel('Nombre')).toHaveAccessibleDescription('Ingresá tu nombre.');
  });
});
