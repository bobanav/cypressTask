import {BasePage} from "../BasePage";

const LOGIN_ICON = "[class=ico]"
const LOGIN_EMAIL_FIELD = "#Login_EmailAddress"
const LOGIN_PASSWORD_FIELD = "#Login_Password"
const LOGIN_BUTTON = "#LoginButton"
const INVALID_LOGIN_ERROR = "[data-valmsg-for=Login]"
const EMPTY_EMAIL_ERROR = "#Login_EmailAddress-error"
const EMPTY_PASSWORD_ERROR = "#Login_Password-error"
const FORGOT_PAGE_BUTTON = ".ForgotPasswordLinkButton"
const FORGOT_EMAIL_FIELD = "#EmailAddress"
const FORGOT_SUBMIT_BUTTON = "#EmailRequestSubmit"
const RESET_PASS_MESSAGE = ".lowerPass"

export class LoginPage extends BasePage {

    static openLoginPage() {
        this.openHomePage()
        this.click(LOGIN_ICON)
    }

    static enterEmail(user) {
        cy.fixture("users").then(takeIt => {
        this.type(LOGIN_EMAIL_FIELD, takeIt[user].eMail)
    })
    }

    static enterPassword(user) {
        cy.fixture("users").then(takeIt => {
            this.type(LOGIN_PASSWORD_FIELD, takeIt[user].passWord)
        })
    }

    static submitAndVerifyInvalidLoginError(text) {
        this.click(LOGIN_BUTTON)
        this.haveText(INVALID_LOGIN_ERROR, text)
    }

    static verifyEmailError(text) {
        this.haveText(EMPTY_EMAIL_ERROR, text)
    }

    static verifyPasswordError(text) {
        this.haveText(EMPTY_PASSWORD_ERROR, text)
    }

    static clickLoginButton() {
        this.click(LOGIN_BUTTON)
    }

    static clickForgotButton() {
        this.openHomePage()
        this.click(LOGIN_ICON)
        this.click(FORGOT_PAGE_BUTTON)
    }

    static enterEmailAndVerifyMessage(user, message) {
        cy.fixture("users").then(takeIt => {
            this.type(FORGOT_EMAIL_FIELD, takeIt[user].eMail)
            this.click(FORGOT_SUBMIT_BUTTON)
            this.containText(RESET_PASS_MESSAGE, message)
        })
    }




}