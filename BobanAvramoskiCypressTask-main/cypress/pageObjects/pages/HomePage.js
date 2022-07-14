import {BasePage} from "../BasePage";

const ACCOUNT_MENU = "[class=TopSubLinkMenu]"

export class HomePage extends BasePage {

    static verifyAccountMenuExists() {
        this.doesExist(ACCOUNT_MENU)
    }

}