
export class LoginPage {
  constructor(page) {
    this.page=page
    this.username = this.page.getByPlaceholder("Username");
    this.password = this.page.getByPlaceholder("Password");
    this.loginButton = this.page.getByText("Login");
  }

  async goto() {
    await this.page.goto("https://www.saucedemo.com");
  }

  async validateLogin(username,password) {
    await this.username.fill(username);

    await this.password.fill(password);
    await this.loginButton.click();
  }
}
