import { test, expect } from '@playwright/test';

test('test', async ({ page, context }) => {

  await context.tracing.start({
    snapshots: true, 
    screenshots: true
  });
  // test code

  await page.goto('https://respond.io/');
  await page.getByRole('link', { name: 'Login' }).click();

  await page.pause();
  await context.tracing.stop({path: 'test-trace.zip'});

  await page.getByPlaceholder('Email address').click();
  await page.getByPlaceholder('Email address').fill('saimahanif1938@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Click123#');
  await page.getByRole('button', { name: 'Sign in' }).click();
});