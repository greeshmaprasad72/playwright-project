import {test} from "@playwright/test"
test("E-commerce test", async ({page})=>{
    await page.goto("https://www.saucedemo.com")
    const username= page.getByPlaceholder("Username")
    const password=page.getByPlaceholder("Password")
    const loginButton= page.getByText("Login")
    await username.fill("standard_usersfsdfd")

    await password.fill("secret_sauce")
    await loginButton.click()
    const errorMessage= page.locator("h3[data-test='error']")
    const errorMessageText= await errorMessage.textContent()
    console.log(errorMessageText)
    await page.pause()
})