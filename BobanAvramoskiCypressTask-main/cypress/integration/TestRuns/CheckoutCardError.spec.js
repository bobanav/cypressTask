import {BasePage} from "../../pageObjects/BasePage";
import {ProductPage} from "../../pageObjects/pages/ProductPage";

describe("Going trough checkout process", () => {
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
    it("Card details error", () => {
        cy.viewport(1920,1080)
        BasePage.openHomePage()
        ProductPage.clickShopNowButton()
        ProductPage.addProduct("email@email.com")
        ProductPage.enterDeliveryDetails("Sporo", "Kucam", "Address", "Riga", "LV-1234", "098765432")
        ProductPage.verifyCardDetailsError("Please complete the card details to continue.")
        ProductPage.verifyCartItem("Chelsea Home Baby Kit 2021 2022")

    })
})