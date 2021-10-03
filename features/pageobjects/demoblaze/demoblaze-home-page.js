import Page from '../page';

class homePage extends Page{
    get btnLogout () { return $([onclick='logOut'])}

    async assertLogoutLinkText(){
        return await expect(this.btnLogout).toBeDisplayed();
    }
}

export default new homePage();
