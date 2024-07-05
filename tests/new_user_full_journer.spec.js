import {test} from "@playwright/test"
import { ProductPage } from "../page-objects/ProductsPage.js"
import { Navigation } from "../page-objects/Navigation.js"
import { Checkout } from "../page-objects/Checkout.js"
import { LoginPage } from "../page-objects/Login.js"
import { RegisterPage} from "../page-objects/RegisterPage.js"

test.only("New user full end-to-end test journey", async({page})=>{

    const productPage = new ProductPage(page)
    await productPage.visit()
    await productPage.sortByCheapest()
    await productPage.addProductToBasket(0)
    await productPage.addProductToBasket(1)
    await productPage.addProductToBasket(2)
    const navigation = new Navigation(page)
    await navigation.goToCheckout()

    const checkout = new Checkout(page)
    await checkout.removeCheapestProduct()
    await checkout.continueToCheckout()

    const login = new LoginPage(page)
    await login.moveToSignup()

    const registerPage = new RegisterPage(page)
    await registerPage.signUpANewUser()
})

