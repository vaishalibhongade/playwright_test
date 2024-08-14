// @ts-check
const { test, expect } = require('@playwright/test');
// Base URL for Myntra
const BASE_URL = 'https://www.myntra.com';

test('filtering', async ({ page }) => {
  // Navigate to the Myntra homepage
  await page.goto(BASE_URL);

  // Locate a list item with text 'Product 2' and click the 'Add to cart' button within it
  // Note: Update selectors based on the actual Myntra page structure
  await page.locator('text=Product 2') // Adjust locator as needed
    .locator('button', { hasText: 'Add to cart' }) // Adjust locator as needed
    .click();
});
test('stock items 5', async ({ page }) => {
    // Navigate to the Myntra homepage
    await page.goto(BASE_URL);
  
    // Assert that there are 5 items in the list that do not have the text 'Out of stock'
    // Note: Update selectors based on the actual Myntra page structure
    await expect(page.locator('listitem') // Adjust locator as needed
      .filter({ hasText: /^(?!.Out of stock).$/ })) // Regex to exclude 'Out of stock'
      .toHaveCount(5);
    });