import {BasePage} from "../../pageObjects/BasePage";
import {HomePage} from "../../pageObjects/pages/HomePage";
import {RegistrationPage} from "../../pageObjects/pages/RegistrationPage";



describe("Registration test cases", () => {
    before(() => {
        cy.request(
            "POST",
            "https://discord.com/api/webhooks/955086226547965952/WuaK1GMcRDVkOexPEz60OETIorJOvQeX4L1ftw7jDn_NuDM_g5J20FkMAcY_mMoUmXPr",
            {
                username: "Boban",
                content: "Registration test starts",

            }
        );
    });

    after(() => {
        cy.request(
            "POST",
            "https://discord.com/api/webhooks/955086226547965952/WuaK1GMcRDVkOexPEz60OETIorJOvQeX4L1ftw7jDn_NuDM_g5J20FkMAcY_mMoUmXPr",
            {
                username: "Boban",
                content: "Registration test ended",

            }
        );
    });
    it("Registering a new user", () => {
        // cy.visit("/")
        // cy.get("[class=ico]").click()
        // cy.get(".innerBorder:nth-child(2) a").click()
        // cy.get("#Registration_FirstName").type("Name")
        // cy.get("#Registration_LastName").type("Surname")
        // cy.get("#Registration_EmailAddress").type("boban.avramoski@testdevlab.com")
        // cy.get("[id=txtPassword]").type("Password")
        // cy.get("#Registration_ConfirmPassword").type("Password")
        // cy.get("#RegistrationSubmit").click()
        // cy.get("[class=TopSubLinkMenu]").should("exist")
        RegistrationPage.openRegPage()
        RegistrationPage.enterRequiredData("registeredUser")
        RegistrationPage.clickSubmit()
        HomePage.verifyAccountMenuExists()



    })

})