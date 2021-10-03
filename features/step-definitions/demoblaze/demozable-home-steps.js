import {Given, When, Then} from "@wdio/cucumber-framework";

import homePage from "../../pageobjects/demoblaze/demoblaze-home-page";

Then(/^user should see home page demoblaze$/, async()=>{
    homePage.assertLogoutLinkText();
})