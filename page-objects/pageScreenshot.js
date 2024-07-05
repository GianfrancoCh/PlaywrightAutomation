// import {expect} from "@playwright/test"

// export class ProductPage{


//     constructor(page){
//         this.page = page
//         this.addButtons = page.locator('[data-qa="product-button"]')  
//     }

//     visit = async(testInfo) => {
//         await this.page.goto("/")
//         const screenshot = await this.page.screenshot();
//         await testInfo.attach('visit-screenshot', { body: screenshot, contentType: 'image/png' });
//     }

//     addProductToBasket = async (index, testInfo) => {
//         const specificAddButton = this.addButtons.nth(index)
//         await specificAddButton.waitFor()
//         await expect (specificAddButton).toHaveText("Add to Basket")

//         const beforeClickScreenshot = await this.page.screenshot()
//         await testInfo.attach('before-click-screenshot', { body: beforeClickScreenshot, contentType: 'image/png' });

//         await specificAddButton.click()
//         await expect (specificAddButton).toHaveText("Remove from Basket")

//         const afterClickScreenshot = await this.page.screenshot();
//         await testInfo.attach('after-click-screenshot', { body: afterClickScreenshot, contentType: 'image/png' });
   
   
//     }
// }