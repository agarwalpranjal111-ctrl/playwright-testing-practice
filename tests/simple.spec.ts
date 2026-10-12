import { test, expect } from '@playwright/test';
test('can add two todos', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  await page.getByPlaceholder('What needs to be done?').fill('First task');
  await page.keyboard.press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('Second task');
  await page.keyboard.press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('Third task');
  await page.keyboard.press('Enter');
  await expect(page.getByText('First task')).toBeVisible();
  await expect(page.getByText('Second task')).toBeVisible();
  await expect(page.getByText('Third task')).toBeVisible();
});
test('list shows 2 items', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  await page.getByPlaceholder('What needs to be done?').fill('Task A');
  await page.keyboard.press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('Task B');
  await page.keyboard.press('Enter');
  await expect(page.getByTestId('todo-title')).toHaveCount(2);
});
test('can add a todo', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  await page.getByPlaceholder('What needs to be done?').fill('Learn Playwright');
  await page.keyboard.press('Enter');
  await expect(page.getByText('Learn Playwright')).toBeVisible();
});

test('completed tab shows only finished tasks', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  await page.getByPlaceholder('What needs to be done?').fill('Task A');
  await page.keyboard.press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('Task B');
  await page.keyboard.press('Enter');

  // tick Task A as done
  await page
    .getByRole('listitem')
    .filter({ hasText: 'Task A' })
    .getByLabel('Toggle Todo')
    .check();

  // open the Completed tab
  await page.getByRole('link', { name: 'Completed' }).click();

  await expect(page.getByText('Task A')).toBeVisible();
  await expect(page.getByText('Task B')).toBeHidden();
});