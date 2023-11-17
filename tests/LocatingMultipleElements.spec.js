import {test, expect} from '@playwright/test'

test('LocateMultipleElements', async ({page}) => {

   await page.goto('https://demoblaze.com/#')

   /*const links = await page.$$('a');

   for(const link of links)
   {
        const linktext = await link.textContent();
        console.log(linktext);
   }
   */
  //Locate all the products displayed on home page
   await page.waitForSelector('xpath=//div[@id="tbodyid"]//h4/a', {timeout: 3000});

    const products = await page.$$("xpath=//div[@id='tbodyid']//h4/a")

    for(const product of products)
    {
        const prodName = await product.textContent();
        console.log(prodName);
    }

    await page.close();
})