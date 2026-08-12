import { test, expect } from "@playwright/test";
test("radio button", async ({page}) => {
await page.goto("https://selenium.qabible.in/")
await page.locator("a[href='simple-form-demo.php']").click()
await page.locator("a[href='radio-button-demo.php']").click()
//get by role is used to get the element by its role, in this case we are getting the radio button by its role
await page.getByRole("radio",{
    name:"Female"
}).first()
.click()
await expect( page.getByRole("radio",{
    name:"Female"
}).first()).toBeChecked() //assertion to check if the radio button is checked or not
console.log( await page.getByRole("radio",{
    name:"Female"
}).first().isChecked() )
await page.pause()


})