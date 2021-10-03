import { Given, When, Then} from '@wdio/cucumber-framework';

import loginPage from '../../pageobjects/demoblaze/demoblaze-login-page';

Given(/^user is on the demoblaze login page$/, async ()=>{
    await loginPage.open();
});

When (/^user is on the demoblaze with correct credential$/, async()=>{
    await loginPage.clickLinkTextLogin();
    await loginPage.inputUsername('gita');
    await loginPage.inputPassword('Berlaku68');
    await loginPage.clickBtnLogin();
});