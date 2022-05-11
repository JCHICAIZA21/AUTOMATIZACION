const APPROOT = require('app-root-path');
//const { LIBRERIAS } = require(APPROOT.path + '/varios/librerias.js');
const {ORGANISMO_TRANSITO} = require(APPROOT.path + '/varios/organismo_transito.js')

//LIBRERIAS.test.chromium;

module.exports = async config => {
        var organismo = ORGANISMO_TRANSITO.usarOt;
        var loginLibrerias = "login";
        var passwordLibrerias = "password";
        var login = await  ORGANISMO_TRANSITO.ot[organismo].usuarios.a[loginLibrerias]; 
        var password = await  ORGANISMO_TRANSITO.ot[organismo].usuarios.a[passwordLibrerias];


        const { baseURL, storageState } = config.projects[0].use;
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();

        //CONTRAVENCIONAL
        await page.goto(baseURL + '/Contravencional/login.html');
        // login en page
        await page.fill('input[id="usuario"]', login.toString());
        await page.fill('input[id="password"]', password.toString());
        await page.click('text=Ingresar');

        //ADMINISTRADOR OT
        await page.goto(baseURL + '/AdministradorOT/login.html#/login');
        // login en page
        await page.locator('input[name="usuario"]').fill(login.toString());
        await page.locator('input[name="password"]').fill(password.toString());
        await page.locator('text=Ingresar').click();

        await context.storageState({ path: storageState });
        await browser.close();

};








