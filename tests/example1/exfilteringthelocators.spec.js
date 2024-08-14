// @ts-check
const { test, expect } = require('@playwright/test');
test('filtering', async ({page}) => {
    await page.goto("https://www.amazon.in/?tag=googmantxtmob170-21&ascsubtag=_k_Cj0KCQjwwuG1BhCnARIsAFWBUC1VVSjqd-Nz0mN9-7NsyNL-7upL88zKPoagk55SuiPC3j-F6mGlHKsaAp86EALw_wcB_k_");
    await page.getByRole("listitem")
      .filter({ hasText: 'Product 2' })
      .getByRole('button', {name: "Add to cart"})
      .click()
  });
   
  test('stock items 5', async ({page}) => {
    await page.goto("https://www.amazon.in/?tag=googmantxtmob170-21&ascsubtag=_k_Cj0KCQjwwuG1BhCnARIsAFWBUC1VVSjqd-Nz0mN9-7NsyNL-7upL88zKPoagk55SuiPC3j-F6mGlHKsaAp86EALw_wcB_k_");
    await expect(page.getByRole("listitem")
      .filter({ hasNotText: 'Out of stock' }))
      .toHaveCount(5)
  });
 