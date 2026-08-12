import test from "@playwright/test";

test("ecommerce", async ({page})=>{
     await page.goto("https://www.saucedemo.com")
    const username= page.getByPlaceholder("Username")
    const password=page.getByPlaceholder("Password")
    const loginButton= page.getByText("Login")
    await username.fill("standard_user")

    await password.fill("secret_sauce")
    await loginButton.click()
    // await page.pause()
    const productName=page.locator(".inventory_item_name")
    const listProduct=await productName.allTextContents()
    console.log(listProduct)
    const count = await productName.count()
    console.log(count)
    const myProduct="Sauce Labs Backpack"
    const productDescription= page.locator(".inventory_item_description")
    for(let i =0; i<count ; i++){
       if(await productDescription.nth(i).locator(".inventory_item_name").textContent() === myProduct){

        console.log(await productDescription.nth(i).locator(".inventory_item_name").textContent())
        const cart =page.getByText("Add to cart")
       await cart.nth(i).click()
        break;
       }

    }

    const shoppicartButton= page.locator(".shopping_cart_link")
    await shoppicartButton.click()
    await page.locator(".cart_list .inventory_item_name").first().waitFor()
    const productVisible= await page.locator(".inventory_item_name:has-text('Sauce Labs Backpack')").isVisible()
    console.log(productVisible)
    const checkout= page.locator("#checkout")
    await checkout.click()
    const firstname= page.getByPlaceholder("First Name")
    const lastname=page.getByPlaceholder("Last Name")
    const postalcode = page.getByPlaceholder("Zip/Postal Code")
    await firstname.fill("Greeshma")
    await lastname.fill("prasad")
    await postalcode.fill("123456")
    const continueButton= page.locator("#continue")
    await continueButton.click()

    await page.pause()

})