import {v4 as uuid4 } from "uuid"

export class RegisterPage{


    constructor(page){
        this.page = page
        this.emailInput = page.getByPlaceholder('E-Mail')
        this.passwordInput = page.getByPlaceholder('password')
        this.registerButton = page.getByRole('button', {name: 'Register'})
        
    }


    signUpANewUser = async () => {

        await this.emailInput.waitFor()
        const emailId = uuid4()
        const email = emailId + '@gmail.com'
        await this.emailInput.fill(email)

        await this.passwordInput.waitFor()
        const password = uuid4()
        await this.passwordInput.fill(password)

        await this.registerButton.waitFor()

        await this.registerButton.click()

        await this.page.pause()
        /*test*/
    }
   
}