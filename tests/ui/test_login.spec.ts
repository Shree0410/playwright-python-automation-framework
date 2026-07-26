import {test, expect} from '@playwright/test';
import {  InventoryPage } from '../../pages/inventory_page';

let inventoryPage: InventoryPage;
const password = 'secret_sauce';


test.describe('SauceDemo Login Suite', ()=>{

    
    test.beforeEach(async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    inventoryPage = new InventoryPage(page);
});


// Test 1 - Valid Credentials   

    test('valid login', async ({page})=>{
        await inventoryPage.login('standard_user', password);
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await inventoryPage.logout();
        
    });

//  Test 2 - Wrong Username

    test('Wrong Credentials', async ({page})=>{
        await inventoryPage.login('standard_user1', 'test');
        await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    
// Test 3 - Locked Out User

    test('Locked Out User', async ({page})=>{
        await inventoryPage.login('locked_out_user', password);
        await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    });

// Test 4 - Empty Username

    test('Empty Username', async ({page})=>{
        await inventoryPage.login('', password);
        await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username is required');
    });

// Test 5 - Empty Password

    test('Empty Password', async ({page})=>{   
    await inventoryPage.login('standard_user', ''); 
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Password is required');
    });

//  Test 6 - Problem User
    // Check 1
    test('Problem User', async ({page})=>{
        await inventoryPage.login('problem_user', password);
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // Check 2 whether the page loads
        await expect(page.locator('.title')).toHaveText('Products');

    // Check 3 whether all images are loaded correctly

        await expect(page.locator('.inventory_item_img')).toHaveCount(6);
        const images = await page.locator('.inventory_item_img img').all();
        let src = [];
        for(let image of images){
            src.push(await image.getAttribute('src'));
        }
        expect(new Set(src).size).toBe(src.length);
        await inventoryPage.logout();

    });

    
// Test 7 - Logout check

    test('Logout check', async ({page})=>{
        await inventoryPage.login('standard_user', password);
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await inventoryPage.logout();
        await expect(page).toHaveURL('https://www.saucedemo.com/');
    });

});
