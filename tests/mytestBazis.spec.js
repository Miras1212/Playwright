import { test, expect, devices } from '@playwright/test';
// npx playwright codegen --device "iPhone12" - чтобы посмотреть все доступные устройства
//npx playwright codegen -o tests/mytestBazis.spec.js - чтобы сгенеренный код сразу сохранялся в файл
test.use ({
  ...devices ['iPhone 13'],
});

/*    Чтобы указать при каком разрешении запускать тесты
test.use ({
  viewport: {
    heigh: 720,
    width: 1280
  }
});
*/

test('test', async ({ page }) => {
  await page.goto('https://testlk01.bazis.kz/front');

  await page.getByLabel('Телефон').fill('+7 777 827-5698');
 
  await page.getByLabel('Пароль').fill('Aa123456');

  await page.getByRole('button', { name: 'Войти' }).click();
});