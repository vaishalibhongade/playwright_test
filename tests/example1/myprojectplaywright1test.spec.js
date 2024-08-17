const { test, expect, defineConfig } = require('@playwright/test');
const exp = require('constants');

module.exports = defineConfig({
  timeout: 100000, retries:2
})

test('Test case 1: Page title contains geeks', async ({ page }) => {
    await page.goto('https://www.geeksforgeeks.org/');
  await expect(page).toHaveTitle(/Geeks/i);
});

test('Test case 2: Verify the "Learn HTML" button is visible and clickable', async ({ page }) => {
  await page.goto('https://www.geeksforgeeks.org/');

  await expect(page.getByLabel('JavaScript Tutorial')).toBeTruthy()
});

test("test case 3:serch box", async({page})=> {
  await page.goto('https://www.geeksforgeeks.org/');
 
  await expect(page.getByLabel("Search")).toBeTruthy()

});

test("test case 4 :sign up", async({page})=> {
  await page.goto('https://www.geeksforgeeks.org/');
  await page.locator('a.user-anonymous.tnb-signup-btn').click();
 
  await expect(page.getByRole('link',{name : "ratail", exact:true})).toBeTruthy()

});