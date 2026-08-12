import { LoginPage } from "./loginpage";
import { Product } from "./product";
import { CartPage } from "./cartPage";
import { CheckoutPage } from "./checkoutPage";
import { Page } from "@playwright/test";

export class PageManager {
  loginPage : LoginPage
  product : Product
  cart : CartPage
  checkout : CheckoutPage
  constructor(page : Page) {
    this.loginPage = new LoginPage(page);
    this.product = new Product(page);
    this.cart = new CartPage(page);
    this.checkout = new CheckoutPage(page);
  }

  getLoginPage(){
    return this.loginPage
  }
  getProductPage(){
    return this.product
  }
  getCartPage(){
    return this.cart
  }
  getCheckoutPage(){
    return this.checkout
  }
}
