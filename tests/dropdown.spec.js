import {test,expect} from "@playwright/test";

test("dropdown", async ({page})=>{
    await page.goto("https://selenium.qabible.in/")
    await page.locator("a[href='simple-form-demo.php']").click()
    await page.locator("a[href='select-input.php']").click()
    const selectInput= page.locator("#single-input-field")
    await selectInput.selectOption("Green")
    const message= page.locator("#message-one")
    await message.click()
    await expect(message).toContainText("Green")
    await page.pause()
})