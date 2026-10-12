import { test, expect } from '@playwright/test';
import path from 'path';
import { pathToFileURL } from 'url';

const appUrl = pathToFileURL(path.resolve('app/index.html')).href;

test('mini app: can add a task', async ({ page }) => {
  await page.goto(appUrl);
  await page.locator('#task').fill('Buy milk');
  await page.locator('#add').click();
  await expect(page.getByText('Buy milk')).toBeVisible();
});

test('mini app: counter shows 2 items after adding 2', async ({ page }) => {
  await page.goto(appUrl);
  await page.locator('#task').fill('Task A');
  await page.locator('#add').click();
  await page.locator('#task').fill('Task B');
  await page.locator('#add').click();
  await expect(page.locator('#count')).toHaveText('2 items');
});

test('mini app: empty task is not added', async ({ page }) => {
  await page.goto(appUrl);
  await page.locator('#add').click();
  await expect(page.locator('#list li')).toHaveCount(0);
});
