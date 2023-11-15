const { test, expect } = require('@playwright/test')

test('Home Page', async ({page})=>{

    await page.goto('https://alpaca.kz/');

    const pageTitle = page.title();
    console.log('Page title is:', pageTitle);

    await expect(page).toHaveTitle('Аренда детских товаров в Алматы с доставкой — Alpaca');

    const pageURL = page.url();
    console.log('Page URL is:', pageURL);

    await expect(page).toHaveURL('https://alpaca.kz/');

    await page.close();

})