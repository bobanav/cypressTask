import {BasePage} from "../BasePage";

const LOGIN_ICON = "[class=ico]"
const CONTINUE_BUTTON = ".innerBorder:nth-child(2) a"
const FIRST_NAME_FIELD = "#Registration_FirstName"
const LAST_NAME_FIELD = "#Registration_LastName"
const EMAIL_ADDRESS = "#Registration_EmailAddress"
const PASSWORD = "[id=txtPassword]"
const CONFIRM_PASSWORD = "#Registration_ConfirmPassword"
const SUBMIT_BUTTON = "#RegistrationSubmit"

export class RegistrationPage extends BasePage {

    static openRegPage() {
        this.openHomePage()
        this.click(LOGIN_ICON)
        this.click(CONTINUE_BUTTON)

    }

    static enterRequiredData(user) {
        cy.fixture("users").then(takeIt => {
            this.type(FIRST_NAME_FIELD, takeIt[user].firstName)
            this.type(LAST_NAME_FIELD, takeIt[user].lastName)
            this.type(EMAIL_ADDRESS, takeIt[user].eMail)
            this.type(PASSWORD, takeIt[user].passWord)
            this.type(CONFIRM_PASSWORD,takeIt[user].passWord)
    })
    }

    static clickSubmit() {
        this.click(SUBMIT_BUTTON)
    }

}