import test from "@playwright/test";
import { PageManager } from "../pagests/pageManager";
import data from "../utils/data.json"
// const datatobj=JSON.parse( JSON.stringify(data))

for(let datatobj of data){



test(`ecommerce ${datatobj.myProduct}`, async ({ page }) => {
 
  const pageManager = new PageManager(page);
  const loginPage = pageManager.getLoginPage();
  const product = pageManager.getProductPage();
  const cart = pageManager.getCartPage();
  const checkout = pageManager.getCheckoutPage();


  //login page
  await loginPage.goto();
  await loginPage.validateLogin(datatobj.username, datatobj.password);
  
  //product page

  await product.addToCart(datatobj.myProduct);
  await product.gotoCart();

  //cartpage

  await cart.gotoCheckout();

  //checkout page

  await checkout.validateFields(datatobj.firstname,datatobj.lastname,datatobj.postalCode);
  await checkout.clcikContinueButton();

  await page.pause();
});
}
