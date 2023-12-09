const {test, expect}= require('@playwright/test')

test('Soft assertions', async ({page}) => {

    await page.goto('https://demoblaze.com/')

    //Hard assertions -  если 1 утверждение завершится неудачно, весь тест будет провален
    /*await expect(page).toHaveTitle('STORE123'); 
    await expect(page).toHaveURL('https://demoblaze.com/')
    await expect(page.locator('.navbar-brand')).toBeVisible();
*/
     //Soft assertions - если 1 утверждение завершится неудачно, остальные проверки всё равно выполнятся
     await expect.soft(page).toHaveTitle('STORE123');
     await expect.soft(page).toHaveURL('https://demoblaze.com/')
     await expect.soft(page.locator('.navbar-brand')).toBeVisible();











})