export class DeliveryDetails{
    constructor(page){
        this.page = page
        this.firstNameInput = page.getByPlaceholder('First name')
        this.lastNameInput = page.getByPlaceholder('Last name')
        this.streetNameInput = page.getByPlaceholder('Street')
        this.postCodeNameInput = page.getByPlaceholder('Post code')
        this.cityInput = page.getByPlaceholder('City')
        this.countryDropdown = page.locator('[data-qa="country-dropdown"]')

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
        await this.page.pause()
    
    }
    
}

