import {BasePage} from "../BasePage";

const NEWBALANCE_CHECKBOX = "[data-item='ABRA^New Balance']"
const ITEM_PRICES = "[class='CurrencySizeLarge curprice productHasRef']"
const SORT_BUTTON = "#ddlSortOptions"
const SHOP_NOW_BUTTON = "[class='saleBottomCenter alignCentre']"
const ADD_PRODUCT = "[title='Nike - Chelsea Home Baby Kit 2021 2022']"
const SELECT_SIZE = "[data-text='6-9 Mnth']"
const ADD_TO_CART = "#aAddToBag"
const OPEN_CART = "#aCheckout"
const GUEST_EMAIL_FIELD = "#Guest_EmailAddress"
const SUBMIT_EMAIL_BUTTON = "[class='dnnPrimaryAction']"
const ENTER_ADDRESS_MANUALLY = "#SaveAddressForm > div.AddressForm > div:nth-child(7) > div.col-xs-12.EnterManAdd > a.manuallyAddAddress"
const FIRST_NAME_FIELD = "#NewAddressSelection_Address_FirstName"
const LAST_NAME_FIELD = "#NewAddressSelection_Address_Surname"
const ADDRESS_FIELD = "#NewAddressSelection_Address_Line1"
const CITY_FIELD = "#NewAddressSelection_Address_Town"
const POST_CODE_FIELD = "#NewAddressSelection_Address_Postcode"
const TEL_NUMBER = "#TelephoneNumber"
const SUBMIT_DELIVERY_DETAILS_BUTTON = "#main-content > div > div > div > div.col-xs-12.col-md-4.CheckoutLeft > div.ProgressButContain.col-xs-12.hidden-xs.hidden-sm > div.AddressContainBut.NewAddressContainBut > input"
const SUBMIT_DELIVERY_OPTION_BUTTON = "#main-content > div > div > div > div.col-xs-12.col-md-4.CheckoutLeft > div.ProgressButContain.col-xs-12.hidden-xs.hidden-sm > div.AddressContainBut.DeliveryContinueButton > input"
const ADD_CARD_BUTTON = "#NewCardPaymentForm > a > span.PayTick"
const SUBMIT_CARD ="#cardSubmit"
const CARD_ERROR_MESSAGE = "#cardDetailsIncompleteError"
const EDIT_CART_BUTTON = "#main-content > div > div > div > div.col-xs-12.col-md-4.CheckoutLeft > div.col-xs-12.ExitLinks > div.EditText.col-xs-6 > a"
const CART_ITEM = "#dhypProductLink"

export class ProductPage extends BasePage {

    static sortNewBalance() {
        this.openHomePage()
        this.click(SHOP_NOW_BUTTON)
        this.click(NEWBALANCE_CHECKBOX)
    }

    static sortProductsBy(option) {
        this.selectOption(SORT_BUTTON, option)
    }

    static verifyHighToLowPrices() {
        let priceArray = []
        cy.get(ITEM_PRICES).each((product) => {
            priceArray.push(product.text().replace("€", ""))
        })
        cy.wrap(priceArray).then((array) => {
            let expectedArray = [...array].sort((a, b) => b - a)
            expect(expectedArray).to.deep.eq(array)
        })
    }

    static clickShopNowButton() {
        this.click(SHOP_NOW_BUTTON)
    }

    static addProduct(email) {
        this.click(ADD_PRODUCT)
        this.click(SELECT_SIZE)
        this.click(ADD_TO_CART)
        this.click(OPEN_CART)
        this.type(GUEST_EMAIL_FIELD, email)
        this.click(SUBMIT_EMAIL_BUTTON)
    }

    static enterDeliveryDetails(name, lastname, address, city, postcode, phone) {
        this.click(ENTER_ADDRESS_MANUALLY)
        this.type(FIRST_NAME_FIELD, name)
        this.type(LAST_NAME_FIELD, lastname)
        this.type(ADDRESS_FIELD, address)
        this.type(CITY_FIELD, city)
        this.type(POST_CODE_FIELD, postcode)
        this.type(TEL_NUMBER, phone)
        this.click(SUBMIT_DELIVERY_DETAILS_BUTTON)
        this.click(SUBMIT_DELIVERY_OPTION_BUTTON)
        this.click(ADD_CARD_BUTTON)
        this.click(SUBMIT_CARD)
    }
    static verifyCardDetailsError(errorMessage) {
        this.haveText(CARD_ERROR_MESSAGE, errorMessage)
    }

    static verifyCartItem(nameOfTheProduct) {
        this.click(EDIT_CART_BUTTON)
        this.containText(CART_ITEM, nameOfTheProduct)
    }
}