const appRoot = require('app-root-path');
const { test } = require('@playwright/test');
const {funciones_bd} = require(appRoot.path + '/varios/funciones_bd.js')



  async function fallo_audiencia() {
    test('Fallo Audiencia', async ({ page }) => {
     
        await page.goto('http://10.11.252.31:8080/Contravencional');

        var compexiste = await funciones_bd.Bd.comparendoexistente();
        
        // Click text=Agendas y Audiencias
        await page.click('text=Agendas y Audiencias'); 

        // Click text=Fallo Audiencia
        await page.click('text=Fallo Audiencia');

        // Click [placeholder="Buscar por comparendo"]
        await page.frame({
            name: 'iframeContenido'
        }).click('[placeholder="Buscar por comparendo"]');

        // Fill [placeholder="Buscar por comparendo"]
        await page.frame({
            name: 'iframeContenido'
        }).fill('[placeholder="Buscar por comparendo"]', compexiste);

        // Click text=Buscar
        await page.frame({
            name: 'iframeContenido'
        }).click('text=Buscar');

        // Press Tab
        await page.frame({
            name: 'iframeContenido'
        }).press('text=Buscar', 'Tab');

        // Click text=${compexiste} C12 Proveer de combustible un vehículo automotor con el mot >> button
        await page.frame({
            name: 'iframeContenido'
        }).click(`text=${compexiste} C12 Proveer de combustible un vehículo automotor con el mot >> button`);

        // Click button:has-text("Si")
        await page.frame({
            name: 'iframeContenido'
        }).click('button:has-text("Si")');

        // Click text=OK
        await page.frame({
            name: 'iframeContenido'
        }).click('text=OK');

        // Click input[name="optradio"]
        await page.frame({
            name: 'iframeContenido'
        }).click('input[name="optradio"]');

        // Click textarea[name="observaciones"]
        await page.frame({
            name: 'iframeContenido'
        }).click('textarea[name="observaciones"]');

        // Fill textarea[name="observaciones"]
        await page.frame({
            name: 'iframeContenido'
        }).fill('textarea[name="observaciones"]', 'Se Genera Resolución por fallo audiencia');

        // Click text=Confirmar
        await page.frame({
            name: 'iframeContenido'
        }).click('text=Confirmar');

        // Click text=OK
        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.frame({
            name: 'iframeContenido'
            }).click('text=OK')
        ]);

        // Click text=OK
        await page.frame({
            name: 'iframeContenido'
        }).click('text=OK');



    });

    
}


fallo_audiencia()

module.exports.fallo_audiencia = fallo_audiencia;