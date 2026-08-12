import { Locator, Page } from "@playwright/test";

export class LoginPage {
  page : Page
  username: Locator
  password: Locator
  loginButton: Locator
  constructor(page : Page) {
    this.page=page
    this.username = this.page.getByPlaceholder("Username");
    this.password = this.page.getByPlaceholder("Password");
    this.loginButton = this.page.getByText("Login");
  }

  async goto() {
    await this.page.goto("https://www.saucedemo.com");
  }

  async validateLogin(username:string,password:string) {
    await this.username.fill(username);

    await this.password.fill(password);
    await this.loginButton.click();
  }
}
