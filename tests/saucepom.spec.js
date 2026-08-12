import test from "@playwright/test";
import { PageManager } from "../pages/pageManager";
import data from "../utils/data.json"

for(let dataobj of data){



test("ecommerce"+dataobj.myProduct, async ({ page }) => {
  const pageManager = new PageManager(page);
  const loginPage = pageManager.getLoginPage();
  const product = pageManager.getProductPage();
  const cart = pageManager.getCartPage();
  const checkout = pageManager.getCheckoutPage();

  //login page
  await loginPage.goto();
  await loginPage.validateLogin(dataobj.username,dataobj.password);
  
  //product page

  await product.addToCart(dataobj.myProduct
  );
  await product.gotoCart();

  //cartpage

  await cart.gotoCheckout();

  //checkout page

  await checkout.validateFields(dataobj.firstname,dataobj.lastname,dataobj.postalCode);
  await checkout.clcikContinueButton();

  await page.pause();
});
}
