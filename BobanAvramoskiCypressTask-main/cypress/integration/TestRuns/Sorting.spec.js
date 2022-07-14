import {ProductPage} from "../../pageObjects/pages/ProductPage";

describe("Sorting", () => {
    before(() => {
        cy.request(
            "POST",
            "https://discord.com/api/webhooks/955086226547965952/WuaK1GMcRDVkOexPEz60OETIorJOvQeX4L1ftw7jDn_NuDM_g5J20FkMAcY_mMoUmXPr",
            {
                username: "Boban",
                content: "Sorting by brand test starts",
            }
        );
    });

    after(() => {
        cy.request(
            "POST",
            "https://discord.com/api/webhooks/955086226547965952/WuaK1GMcRDVkOexPEz60OETIorJOvQeX4L1ftw7jDn_NuDM_g5J20FkMAcY_mMoUmXPr",
            {
                username: "Boban",
                content: "Sorting by brand test ended",
            }
        );
    });
    it("Sorting by brand", () => {

        cy.viewport(1920, 1080)

        ProductPage.sortNewBalance()
        // cy.visit("https://lv.sportsdirect.com/sale/football")
        // cy.get("[data-item='ABRA^New Balance']").click()
        cy.wait(5000)
        cy.get("#navlist li").each((item) => {
            expect(item.html()).to.contain("New Balance")


        })

    })
})













