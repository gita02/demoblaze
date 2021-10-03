//import loginPage from '../login.page';
import Page from '../page';

class loginPage extends Page{
    get linkTextLogin () { return $('[data-target="#logInModal"]')}
    get txtfieldUsername () {return $('#loginusername')}
    get txtfieldPassword () {return $('#loginpassword')}
    get btnLogin () {return $('[onclick="logIn"]')}

    open(){
        return super.open('');
    }

    async clickLinkTextLogin(){
        await this.linkTextLogin.waitForDisplayed(2000);
        await this.linkTextLogin.click();
    }

    async inputUsername(username){
        await this.txtfieldUsername.waitForDisplayed(2000);
        await this.txtfieldUsername.setValue(username);
    }

    async inputPassword(password){
        await this.txtfieldPassword.waitForDisplayed(2000);
        await this.txtfieldPassword.setValue(password);
    }

    async clickBtnLogin(){
        await this.btnLogin.waitForDisplayed(2000);
        await this.btnLogin.click();
    }

}

export default new loginPage();