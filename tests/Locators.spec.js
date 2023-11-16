//const { test, expect } = require('@playwright/test')
import {test, expect} from '@playwright/test'

test('locators', async ({page}) => {

    await page.goto("https://demoblaze.com/#");

    //click on login button    - property
    //await page.locator('id=login2').click()
    await page.click('id=login2');

    //provide username   - CSS
    //wait page.locator('#loginusername').fill("miras")
    //await page.type('#loginusername', 'miras') - устарел метод 'type'
    await page.fill('#loginusername', 'miras');

    //provide password   -property
    await page.fill("input[id='loginpassword']", 'test@123');

    //Click on login button   -XPath
    await page.click("//button[normalize-space()='Log in']");

    //verify logout link presence    -XPath
    const logoutlink = await page.locator("//a[@id='logout2']");

    await expect(logoutlink).toBeVisible();

    await page.close();

})