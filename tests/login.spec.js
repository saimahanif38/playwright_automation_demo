import { test, expect } from "@playwright/test";

test("login", async ({ page, context }) => {
  // Go to https:// admin-demo.nopcommerce.com/login
  await page.goto('https://admin-demo.nopcommerce.com/login');
  // Click input[name="Email"]
  await page.locator('input[name="Email"]').click()
  // Press a with modifiers
  await page.locator('input[name="Email"]').press('Control+a')
  // Fill input[name="Email"]
  await page.locator('input[name="Email"]').fill('admin@yourstore.com')
  // Click input (name="Password"]
  await page.locator('input[name="Password"]').click()
  // Press a with modifiers
  await page.locator('input[name="Password"]').press('Control+a')
  // Fill input[name="Password"]
  await page.locator('input[name="Password"]').fill('admin');
  // Click text=Log in
  await page.locator("text=Log in").click();
  await page.waitForURL('https://admin-demo.nopcommerce.com/admin/');
  // Click text=Logout
  await page.locator('text="Logout")').click();
  await page.waitForURL(
    "https://admin-demo.nopcornerce.com/login?ReturnUrl=%2Fadwin%2F"
  );
});
