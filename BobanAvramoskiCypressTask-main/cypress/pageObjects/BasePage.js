export class BasePage {

    static openHomePage () {
        cy.visit("/")
    }

    static click (selector) {
        cy.get(selector).click()
    }

    static type (selector, text) {
        cy.get(selector).type(text)
    }

    static doesExist (selector) {
        cy.get(selector).should("exist")
    }

    static haveText (selector, text) {
        cy.get(selector).should("have.text", text)
    }

    static containText (selector, text) {
        cy.get(selector).should("contain.text", text)
    }

    static selectOption(selector, option) {
        cy.get(selector).select(option);
    }



}