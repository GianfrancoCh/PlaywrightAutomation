import { expect } from "@playwright/test"

export class DeliveryDetails{
    constructor(page){
        this.page = page
        this.firstNameInput = page.getByPlaceholder('First name')
        this.lastNameInput = page.getByPlaceholder('Last name')
        this.streetNameInput = page.getByPlaceholder('Street')
        this.postCodeNameInput = page.getByPlaceholder('Post code')
        this.cityInput = page.getByPlaceholder('City')
        this.countryDropdown = page.locator('[data-qa="country-dropdown"]')
        this.saveAdressButton = page.getByRole('button', { name: 'Save address for next time' })
        this.savedAdressContainer = page.locator('[data-qa="saved-address-container"]')
        this.savedAdressFirstName = page.locator('[data-qa="saved-address-firstName"]')
        this.savedAdressLastName = page.locator('[data-qa="saved-address-lastName"]')
        this.savedAdressStreet = page.locator('[data-qa="saved-address-street"]')
        this.savedAdressPostCode = page.locator('[data-qa="saved-address-postcode"]')
        this.savedAdressCity = page.locator('[data-qa="saved-address-city"]')
        this.savedAdressCountry = page.locator('[data-qa="saved-address-country"]')
        this.continueToPaymentButton = page.locator('[data-qa="continue-to-payment-button"]')

    }

    fillDetails = async (userAdress) => {
        await this.firstNameInput.waitFor()
        await this.firstNameInput.fill(userAdress.firstName)
        await this.lastNameInput.waitFor()
        await this.lastNameInput.fill(userAdress.lastName)
        await this.streetNameInput.waitFor()
        await this.streetNameInput.fill(userAdress.street)
        await this.postCodeNameInput.waitFor()
        await this.postCodeNameInput.fill(userAdress.postcode)
        await this.cityInput.waitFor()
        await this.cityInput.fill(userAdress.city)
        await this.countryDropdown.waitFor()
        await this.countryDropdown.selectOption(userAdress.country)
    
    }

    saveDetails = async () => {
        const adressCountBeforeSaving = await this.savedAdressContainer.count()
        await this.saveAdressButton.waitFor()
        await this.saveAdressButton.click()
        await expect(this.savedAdressContainer).toHaveCount(adressCountBeforeSaving + 1)

        await this.savedAdressFirstName.first().waitFor()
        expect(await this.savedAdressFirstName.first().innerText()).toBe(await this.firstNameInput.inputValue())    

        await this.savedAdressLastName.first().waitFor()
        expect(await this.savedAdressLastName.first().innerText()).toBe(await this.lastNameInput.inputValue())   

        await this.savedAdressCity.first().waitFor()
        expect(await this.savedAdressCity.first().innerText()).toBe(await this.cityInput.inputValue())  

        await this.savedAdressPostCode.first().waitFor()
        expect(await this.savedAdressPostCode.first().innerText()).toBe(await this.postCodeNameInput.inputValue())  

        await this.savedAdressCountry.first().waitFor()
        expect(await this.savedAdressCountry.first().innerText()).toBe(await this.countryDropdown.inputValue())  
    
    }

    continueToPaymentPage = async () => {
        await this.continueToPaymentButton.waitFor()
        await this.continueToPaymentButton.click()
        await this.page.waitForURL(/\/payment/, {timeout: 3000})
    }

    
}

