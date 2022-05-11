const appRoot = require('app-root-path');
const {librerias} = require(appRoot.path + '/varios/librerias.js')
const {funciones_bd} = require(appRoot.path + '/varios/funciones_bd.js')

librerias.Screenshot


async function caducidad(comparendo) {

    test('Caducidad comparendo', async ({ page }) => {

        await page.goto('http://10.11.252.31:8080/Contravencional');

        await page.waitForTimeout(2000);

        // Click a:nth-child(23) .caret
        await page.click('a:nth-child(21) .caret');

        // Click text=Caducidad / Prescripcion
        await page.click('text=Caducidad / Prescripcion');
        // Press ArrowDown
        await page.frame({
            name: 'iframeContenido'
        }).press('select', 'ArrowDown');

        // Press Tab
        await page.frame({
            name: 'iframeContenido'
        }).press('select', 'Tab');

        // Fill input[type="text"]
        await page.frame({
            name: 'iframeContenido'
        }).fill('input[type="text"]', `${comparendo}`);

        // Click button:has-text("Buscar")
        await page.frame({
            name: 'iframeContenido'
        }).click('button:has-text("Buscar")');

        // Fill input[name="numeroComparendo"]
        await page.frame({
            name: 'iframeContenido'
        }).fill('input[name="numeroComparendo"]', `${comparendo}`);

        // Check input[type="checkbox"]
        await page.frame({
            name: 'iframeContenido'
        }).check('input[type="checkbox"]');

        // Click button:has-text("Caducar")
        await page.frame({
            name: 'iframeContenido'
        }).click('button:has-text("Caducar")');

        // Click text=OK
        await page.frame({
            name: 'iframeContenido'
        }).click('text=OK');

        //screenshot({ filename: appRoot.path + '/screenshots/img_test_digitacion' + uuidv4() + '.jpg' });
    });
}


module.exports.caducidad = caducidad;