const {test, expect} = require('@playwright/test')

test('handle radio button', async ({page})=>{

await page.goto('https://demoqa.com/automation-practice-form')

//Radio button
await page.locator('//label[@for="gender-radio-1"]').check();   //Male
//await page.check('//label[@for="gender-radio-1"]');

await expect(await page.locator('//label[@for="gender-radio-1"]')).toBeChecked();
await expect(await page.locator('//label[@for="gender-radio-1"]').isChecked()).toBeTruthy();

await expect(await page.locator('//label[@for="gender-radio-2"]').isChecked()).toBeFalsy();  //Female


})