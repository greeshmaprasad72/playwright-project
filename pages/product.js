export class Product {
  constructor(page) {
    this.page = page;
    this.productName = page.locator(".inventory_item_name");
    this.productDescription = page.locator(".inventory_item_description");
    this.shoppicartButton = page.locator(".shopping_cart_link");
  }

  async addToCart(myProduct) {
    const listProduct = await this.productName.allTextContents();
    console.log(listProduct);
    const count = await this.productName.count();
    console.log(count);
    

    for (let i = 0; i < count; i++) {
      if (
        (await this.productDescription
          .nth(i)
          .locator(".inventory_item_name")
          .textContent()) === myProduct
      ) {
        console.log(
          await this.productDescription
            .nth(i)
            .locator(".inventory_item_name")
            .textContent(),
        );
        const cart = this.page.getByText("Add to cart");
        await cart.nth(i).click();
        break;
      }
    }
  }

  async gotoCart() {
    await this.shoppicartButton.click();
  }
}
