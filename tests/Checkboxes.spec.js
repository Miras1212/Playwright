const {test, expect} = require('@playwright/test')

test('Handle checkboxes', async ({page}) => {

await page.goto('https://demoqa.com/automation-practice-form')

//single checkbox
await page.locator('//label[@for="hobbies-checkbox-1"]').check();
//await page.check('//label[@for="hobbies-checkbox-1"]');

expect(await page.locator('//label[@for="hobbies-checkbox-1"]')).toBeChecked();
expect(await page.locator('//label[@for="hobbies-checkbox-1"]').isChecked()).toBeTruthy();

expect(await page.locator('//label[@for="hobbies-checkbox-2"]').isChecked()).toBeFalsy();

//Multiple checkboxes
const checkboxLocators = [
                    '//label[@for="hobbies-checkbox-1"]', 
                    '//label[@for="hobbies-checkbox-2"]'
                    ];
for(const locator of checkboxLocators)   //select multiple checkboxes
{
    await page.locator(locator).check();
}

for(const locator of checkboxLocators)   //unselect multiple checkboxes which are already selected
{
    if(await page.locator(locator).isChecked())
    {
    await page.locator(locator).uncheck();
    }
}


})