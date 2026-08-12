
   

   export class CartPage{
        constructor(page){
            this.page=page
            this.product=page.locator(".cart_list .inventory_item_name")
          this.productName=  page.locator(".inventory_item_name:has-text('Sauce Labs Backpack')")
             this. checkout= page.locator("#checkout")
        }

        async gotoCheckout(){
            await this.product.first().waitFor()
            const productVisible= await this.productName.isVisible()
            console.log(productVisible)
            await this.checkout.click()

        }
    }