const appRoot = require('app-root-path');
const { test } = require('@playwright/test');
const {funciones_bd} = require(appRoot.path + '/varios/funciones_bd.js')


async function solicitud_audiencia() {
    test('Audiencia', async ({ page }) => {
        var compexiste = await funciones_bd.Bd.frame


        await page.goto('http://10.11.252.31:8080/Contravencional');

        // Click text=Agendas y Audiencias
        await page.click('text=Agendas y Audiencias');

        // Click text=Solicitud Audiencia
        await page.click('text=Solicitud Audiencia');


        // Fill input 
        await page.frame({
            name: 'iframeContenido',   
          }).fill('[placeholder="Buscar por comparendo"]',compexiste);

        
        // Select 3
        await page.frame({
        name: 'iframeContenido'
        }).selectOption('text=Tipo AlcoholemiaInmovilizadosGenerales CoactivoDetección ElectrónicaTransporteBl >> select', '3');

        // Click text=Buscar
        await page.frame({
            name: 'iframeContenido'
        }).click('text=Buscar');
        
          // Click input[name="comparendo"]
        await page.frame({
            name: 'iframeContenido'
        }).click('input[name="comparendo"]');

        // Click div:nth-child(10) div:nth-child(2)
        await page.frame({
            name: 'iframeContenido'
        }).click('div:nth-child(10) div:nth-child(2)');

        // Click text=Agendar
        await page.frame({
            name: 'iframeContenido'
        }).click('text=Agendar');

        // Click text=OK
        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.frame({
            name: 'iframeContenido'
            }).click('text=OK')
        ]);
    });
};


module.exports.solicitud_audiencia = solicitud_audiencia;



