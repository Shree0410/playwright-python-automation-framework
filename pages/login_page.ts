import {Page} from "@playwright/test";

export class LoginPage{
    page:Page;
    constructor(page: Page){
        this.page=page;
    }

async login(username: string, password: string){
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
}
async logout(){
    await this.page.locator('#react-burger-menu-btn').click();
    await this.page.locator('#logout_sidebar_link').click();
}
}
