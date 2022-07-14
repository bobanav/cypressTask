import {ProductPage} from "../../pageObjects/pages/ProductPage";
import {LoginPage} from "../../pageObjects/pages/LoginPage";
import {BasePage} from "../../pageObjects/BasePage";


describe("Sorting products by price", () => {
before(() => {
        cy.request(
            "POST",
            "https://discord.com/api/webhooks/955086226547965952/WuaK1GMcRDVkOexPEz60OETIorJOvQeX4L1ftw7jDn_NuDM_g5J20FkMAcY_mMoUmXPr",
            {
                username: "Boban",
                content: "Sorting products by price test run starts",
            }
        );
    });

    after(() => {
        cy.request(
            "POST",
            "https://discord.com/api/webhooks/955086226547965952/WuaK1GMcRDVkOexPEz60OETIorJOvQeX4L1ftw7jDn_NuDM_g5J20FkMAcY_mMoUmXPr",
            {
                username: "Boban",
                content: "Sorting products by price test run ended",
            }
        );
    });
    it("Sort High to Low", () => {
        cy.viewport(1920, 1080)
        BasePage.openHomePage()
        ProductPage.clickShopNowButton()
        ProductPage.sortProductsBy("price_desc")
        ProductPage.verifyHighToLowPrices()
    })
})