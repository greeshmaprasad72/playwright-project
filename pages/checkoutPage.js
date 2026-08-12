export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstname = page.getByPlaceholder("First Name");
    this.lastname = page.getByPlaceholder("Last Name");
    this.postalcode = page.getByPlaceholder("Zip/Postal Code");
    this.continueButton = page.locator("#continue");
  }
  async validateFields(firstname,lastname,zipcode) {
    await this.firstname.fill(firstname);
    await this.lastname.fill(lastname);
    await this.postalcode.fill(zipcode);
  }

  async clcikContinueButton() {
    await this.continueButton.click();
  }
}
