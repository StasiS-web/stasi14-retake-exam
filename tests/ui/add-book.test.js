const { test, expect } = require('@playwright/test');

test('Check add book page', async ({ page }) => {
    await page.goto('https://stasi14-library.onrender.com/add-book');
    const form = await page.$('div');
    expect(form).toBeTruthy();
  });
  