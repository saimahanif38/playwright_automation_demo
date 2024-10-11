** To run tests altogether
=> npx playwright test

** To run tests specific test on specific browser
=> npx playwright test demo_record.spec.js --headed webkit/firefox/chromium

** To record tests steps
=> npx playwright codegen

** To record tests steps on particular browser
=> npx playwright codegen --browser firefox (by default chromium)

** To record tests steps on specific language and save a file
=> npx playwright codegen --target javascript

** To have trace file follow these steps

1. set retries: 1 (atleast)
2. set trace: 'on-first-retry'
3. Now run tests by setting one of the test tends to fail and then it will retry and create trace file in the test-results/test-name/trace.zip
4. You can also open trace file by this 
=> npx playwright show-trace test-results/{test-file-name}/trace.zip


** How to add trace programmatically at the start of test and where to end
=> await context.tracing.start({
    snapshots: true, 
    screenshots: true
  });
=>   await context.tracing.stop({path: 'path/../ test-trace.zip'});

** In order to run test and find locators you should add this line on script and you can find locators with the help of playwright   
=> await page.pause()
1. hover to the explore option on the playwright inspector and can get locators and following are the ways of locators 
    // using any object property
    await page.click('id=user-name')
    await page locator('id=user-name').fill('Edison')
    await page.locator('[id="user-name"]').fill('Einstein')
    // using CSS Selector
    // #login-button
    await page.locator('#login-button').click()
    // using XPath
    await page.locator('xpath=//input[@id="user-name"]').fill('Faraday')
    await page.locator('//input[@id="user-name"] ').fill( 'Ramanujan')
    // using Text
    await page.locator('text=LOGIN').click();
    await page.locator ('input:has-text("LOGIN")').click()

** To add wait before element
    await page.waitForSelector (text=Sign in', { timeout: 4000 }) 
    await expect(page.locator('text=Sign in')).toHaveCount(1)



