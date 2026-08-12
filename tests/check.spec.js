import {test,expect} from "@playwright/test"
test("radio button", async ({page}) => {
    await page.goto("https://selenium.qabible.in/")
    await page.locator("a[href='simple-form-demo.php']").click()
    const checkBoxDemo=page.locator("a[href='check-box-demo.php']")
    await checkBoxDemo.click()
    const checkBox=page.getByLabel("Click on this check box")
    await checkBox.check()
       expect(await checkBox.isChecked()).toBeTruthy() 
    await expect(checkBox).toBeChecked()
    await checkBox.uncheck()
   console.log( await checkBox.isChecked() )
   expect(await checkBox.isChecked()).toBeFalsy() //assertion to check if the checkbox is unchecked or not  

   // await expect(checkBox).toBeChecked()
    await page.pause()

})

//only is used to run only this test and skip all other tests
test("screenshot", async ({page})=>{
    await page.goto("https://selenium.qabible.in/")
    const inputForm=page.locator("a[href='simple-form-demo.php']")
    
    await inputForm.screenshot({path: "inputform.png"})
})


test("visual comparison", async ({page})=>{
    await page.goto("https://selenium.qabible.in/")
    expect(await page.screenshot()).toMatchSnapshot("home2.png")
})

test("@web iFrame test", async ({page})=>{
    await page.goto("https://demoqa.com/frames")
    const heading= page.frameLocator("#frame1")
    const textContent= await heading.locator("#sampleHeading").textContent()
    console.log(textContent)
    await page.pause()
})

