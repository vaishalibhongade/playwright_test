const { test, expect, defineConfig} = require('@playwright/test');

module.exports = defineConfig({
   timeout: 100000, retries:2
 })

test('test 6: html Test ',async ({page})=> {
    await page.goto("https://www.w3schools.com/html/",{timeout: 70000});

    await expect(page).toHaveTitle(/HTML/i);
})

test('test 7 : should see "HTML Examples" section', async ({ page }) => {
    await page.goto("https://www.w3schools.com/html/",{timeout: 70000});
    const examplesSection = page.locator('a.ws-btn.ws-grey.ws-hover-black[href*="html_examples"]');
    // Targeting the link styled as a button
        await expect(examplesSection).toBeVisible({timeout:6000});
});


test('test 9: Test W3Schools Next button', async ({ page }) => {
  test.setTimeout(120000)
 await page.goto('https://www.w3schools.com/html/html_intro.asp', { waitUntil: 'networkidle', timeout: 60000 });

const nextButton = page.getByRole('link', { name: 'Next ❯' }).first();
 await expect(nextButton).toBeVisible();
 await nextButton.click();

 await expect(page).toHaveURL(/\/html\/html_editors.asp/);

 const nextButton2 = page.getByRole('link', { name: 'Next ❯' }).first();
 
 await expect(nextButton2).toBeVisible();
});


//  test('test 10: html Test ',async ({page})=> {
//   test.setTimeout(120000) 
//   await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml_images_alt_chania");

//    const locator = page.getByRole('textarea');
//    await expect(locator).toBeEditable({timeout:50000});
//  })


test('test 10: skip this test', async ({ page, browserName }) => {
  await page.goto("https://www.w3schools.com/html");
  test.skip(browserName === 'firefox', 'Still working on it');
});
