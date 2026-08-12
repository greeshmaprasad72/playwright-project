import {test} from "@playwright/test"
test("locators", async({page})=>{
 await page.goto("https://selenium.qabible.in/")
//  await page.locator(".nav-link").click()
await page.locator("a[href='simple-form-demo.php']").click()
await page.locator("#single-input-field").fill("Hello, World!")
// await page.locator(".btn.btn-primary").first().?click() 
await page.locator(".btn.btn-primary").nth(0).click() // nth(0) means first button, nth(1) means second button
await page.locator("a[href='check-box-demo.php']").click() // click on checkbox demo link
 await page.pause()

})