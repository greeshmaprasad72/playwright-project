import { Locator, Page } from "@playwright/test";

export class CheckoutPage {
  page : Page
  firstname : Locator
  lastname : Locator
  postalcode : Locator
  continueButton : Locator
  constructor(page : Page) {
    this.page = page;
    this.firstname = page.getByPlaceholder("First Name");
    this.lastname = page.getByPlaceholder("Last Name");
    this.postalcode = page.getByPlaceholder("Zip/Postal Code");
    this.continueButton = page.locator("#continue");
  }
  async validateFields(firsname:string,
    lastname:string,postalCode:string) {
    await this.firstname.fill(firsname);
    await this.lastname.fill(lastname);
    await this.postalcode.fill(postalCode);
  }

  async clcikContinueButton() {
    await this.continueButton.click();
  }
}
