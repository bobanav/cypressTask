import {LoginPage} from "../../pageObjects/pages/LoginPage";
import {HomePage} from "../../pageObjects/pages/HomePage";

describe("Logging in", () => {
    before(() => {
        cy.request(
            "POST",
            "https://discord.com/api/webhooks/955086226547965952/WuaK1GMcRDVkOexPEz60OETIorJOvQeX4L1ftw7jDn_NuDM_g5J20FkMAcY_mMoUmXPr",
            {
                username: "Boban",
                content: "Login test run starts",
            }
        );
    });

    after(() => {
        cy.request(
            "POST",
            "https://discord.com/api/webhooks/955086226547965952/WuaK1GMcRDVkOexPEz60OETIorJOvQeX4L1ftw7jDn_NuDM_g5J20FkMAcY_mMoUmXPr",
            {
                username: "Boban",
                content: "Login test run ended",
            }
        );
    });

    it("Trying to log in with invalid credentials", () => {
        // cy.visit("/")
        // cy.get("[class=ico]").click()
        // cy.get("#Login_EmailAddress").type("asdf@asdf.com")
        // cy.get("#Login_Password").type("PasswordWrong")
        // cy.get("#LoginButton").click()
        // cy.get("[data-valmsg-for=Login]").should("have.text", "This email address or password is incorrect")
        LoginPage.openLoginPage()
        LoginPage.enterEmail("invalidUser")
        LoginPage.enterPassword("invalidUser")
        LoginPage.submitAndVerifyInvalidLoginError("This email address or password is incorrect")


    })


    it("Trying to login with invalid password", () => {
        // cy.visit("/")
        // cy.get("[class=ico]").click()
        // cy.get("#Login_EmailAddress").type("boban.avramoski@testdevlab.com")
        // cy.get("#Login_Password").type("PasswordWrong")
        // cy.get("#LoginButton").click()
        // cy.get("[data-valmsg-for=Login]").should("have.text", "This email address or password is incorrect")
        LoginPage.openLoginPage()
        LoginPage.enterEmail("registeredUser")
        LoginPage.enterPassword("invalidUser")
        LoginPage.submitAndVerifyInvalidLoginError("This email address or password is incorrect")
    })


    it("Trying to login without Username", () => {
        // cy.visit("/")
        // cy.get("[class=ico]").click()
        // cy.get("#Login_Password").type("Password")
        // cy.get("#LoginButton").click()
        // cy.get("#Login_EmailAddress-error").should("have.text", "Please provide an email address")
        LoginPage.openLoginPage()
        LoginPage.enterPassword("registeredUser")
        LoginPage.clickLoginButton()
        LoginPage.verifyEmailError("Please provide an email address")

    })


    it("Trying to login without password", () => {
        // cy.visit("/")
        // cy.get("[class=ico]").click()
        // cy.get("#Login_EmailAddress").type("boban.avramoski@testdevlab.com")
        // cy.get("#LoginButton").click()
        // cy.get("#Login_Password-error").should("have.text", "Please provide a password")
        LoginPage.openLoginPage()
        LoginPage.enterEmail("registeredUser")
        LoginPage.clickLoginButton()
        LoginPage.verifyPasswordError("Please provide a password")

    })


    it("Trying to login without any credentials", () => {
        // cy.visit("/")
        // cy.get("[class=ico]").click()
        // cy.get("#LoginButton").click()
        // cy.get("#Login_EmailAddress-error").should("have.text", "Please provide an email address")
        // cy.get("#Login_Password-error").should("have.text", "Please provide a password")
        LoginPage.openLoginPage()
        LoginPage.clickLoginButton()
        LoginPage.verifyEmailError("Please provide an email address")
        LoginPage.verifyPasswordError("Please provide a password")


    })


    it("Logging in with an existing user", () => {
        // cy.visit("/")
        // cy.get("[class=ico]").click()
        // cy.get("#Login_EmailAddress").type("boban.avramoski@testdevlab.com")
        // cy.get("#Login_Password").type("Password")
        // cy.get("#LoginButton").click()
        // cy.get("[class=TopSubLinkMenu]").should("exist")
        LoginPage.openLoginPage()
        LoginPage.enterEmail("registeredUser")
        LoginPage.enterPassword("registeredUser")
        LoginPage.clickLoginButton()
        HomePage.verifyAccountMenuExists()


    })



})