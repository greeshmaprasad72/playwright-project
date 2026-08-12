import { test } from "@playwright/test";

test("keyboard actions", async ({page})=>{
    await page.goto("https://selenium.qabible.in/");
    await page.locator("a[href='simple-form-demo.php']").click();
    await page.locator("a[href='form-submit.php']").click();
    const firstname=  page.locator("#validationCustom01")
    const lastname=page.locator("#validationCustom02")
    const username=page.locator("#validationCustomUsername")
    const city=page.locator("#validationCustom03")
    const state=page.locator("#validationCustom04")
    const zip=page.locator("#validationCustom05")
    const checkBox=page.getByLabel("Agree to terms and conditions")
    const submitButton=page.getByRole("button", { name: "Submit form" })

    await firstname.click()
    await page.keyboard.type("Greeshma")
    await lastname.click()
    await page.keyboard.type("Prasad")

    await lastname.press("Control+A")
    await lastname.press("Control+C")
    await city.click()
    await city.press("Control+V")

    await checkBox.dblclick()

    await zip.click({button:"right"})
    await checkBox.click({clickCount:3})



    await page.pause()




})