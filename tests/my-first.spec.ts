import { test, expect } from '@playwright/test';

test('can add a todo', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  await page.getByPlaceholder('What needs to be done?').fill('Learn Playwright');
  await page.keyboard.press('Enter');
  await expect(page.getByText('Learn Playwright')).toBeVisible();
});