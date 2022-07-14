import {LoginPage} from "../../pageObjects/pages/LoginPage";

describe("ForgotPassword", () => {
    before(() => {
        cy.request(
            "POST",
            "https://discord.com/api/webhooks/955086226547965952/WuaK1GMcRDVkOexPEz60OETIorJOvQeX4L1ftw7jDn_NuDM_g5J20FkMAcY_mMoUmXPr",
            {
                username: "Boban",
                content: "Forgot password test starts",

            }
        );
    });

    after(() => {
        cy.request(
            "POST",
            "https://discord.com/api/webhooks/955086226547965952/WuaK1GMcRDVkOexPEz60OETIorJOvQeX4L1ftw7jDn_NuDM_g5J20FkMAcY_mMoUmXPr",
            {
                username: "Boban",
                content: "Forgot password test ended",

            }
        );
    });

    it("Resetting password", () => {
        // cy.visit("/")
        // cy.get("[class=ico]").click()
        // cy.get(".ForgotPasswordLinkButton").click()
        // cy.get("#EmailAddress").type("boban.avramoski@testdevlab.com")
        // cy.get("#EmailRequestSubmit").click()
        // cy.get(".lowerPass").should("contain.text", "If the email address entered was correct, you should receive a new email shortly with a link to reset your password.")
        LoginPage.clickForgotButton()
        LoginPage.enterEmailAndVerifyMessage("registeredUser", "If the email address entered was correct, you should receive a new email shortly with a link to reset your password." )

    })
})
