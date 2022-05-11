const APPROOT = require('app-root-path');
const { LIBRERIAS } = require(APPROOT.path + '/varios/librerias.js');
const { FUNCIONESBD } = require(APPROOT.path + '/varios/funciones_bd.js');

LIBRERIAS.Screenshot

async function moduloConsulta(cantidadComp) {
    test('consulta comparendo', async ({ page }) => {
        await page.goto('http://10.11.252.31:8080/Contravencional');

        // Click text=Consulta
        await page.click('text=Consulta');

        // Click text=Consulta Comparendo
        await page.click('text=Consulta Comparendo');

        // Click text=Consultar por Comparendo
        await page.frame({
            name: 'iframeContenido'
        }).click('text=Consultar por Comparendo');

        // Click [placeholder="Buscar por comparendo"]
        await page.frame({
            name: 'iframeContenido'
        }).click('[placeholder="Buscar por comparendo"]');

        await consultar(cantidadComp);

        async function consultar(nComparendos) {
            var comparendoConsulta = await FUNCIONESBD.bd.comparendoExistente(nComparendos);
            for (let i = 0; i < comparendoConsulta.length; i++) {
                const comp = comparendoConsulta[i];

                // Fill [placeholder="Buscar por comparendo"]
                await page.frame({
                    name: 'iframeContenido'
                }).fill('[placeholder="Buscar por comparendo"]', comp);

                // Click text=Buscar
                await page.frame({
                    name: 'iframeContenido'
                }).click('text=Buscar');

                await page.waitForTimeout(2000);

                await scrollAbajo(4);

                await page.waitForTimeout(2000);

                await screenshot({ filename: APPROOT.path + '/screenshots/consulta_comparendo/img' + uuidv4() + '.jpg' });

                // Click text=Datos del Comparendo
                await page.frameLocator('#iframeContenido').locator('text=Datos del Comparendo').click();

                // Click text=Trazabilidad
                await page.frameLocator('#iframeContenido').locator('text=Trazabilidad').click();

                await scrollAbajo(4);

                await page.waitForTimeout(2000);

                await screenshot({ filename: APPROOT.path + '/screenshots/consulta_comparendo/img' + uuidv4() + '.jpg' });

                // Click text=Trazabilidad
                await page.frameLocator('#iframeContenido').locator('text=Trazabilidad').click();

                // Click a:has-text("Datos del Infractor")
                await page.frameLocator('#iframeContenido').locator('a:has-text("Datos del Infractor")').click();

                await scrollAbajo(3);

                await page.waitForTimeout(2000);

                await screenshot({ filename: APPROOT.path + '/screenshots/consulta_comparendo/img' + uuidv4() + '.jpg' });

                // Click a:has-text("Datos del Infractor")
                await page.frameLocator('#iframeContenido').locator('a:has-text("Datos del Infractor")').click();

                // Click text=Información de Saldos de Cartera
                await page.frameLocator('#iframeContenido').locator('text=Información de Saldos de Cartera').click();

                await scrollAbajo(6);

                await page.waitForTimeout(2000);

                await screenshot({ filename: APPROOT.path + '/screenshots/consulta_comparendo/img' + uuidv4() + '.jpg' });

                await page.frameLocator('#iframeContenido').locator('text=Información de Saldos de Cartera').click();

                await scrollArriba(10)



                async function scrollAbajo(veces) {
                    for (let i = 0; i < veces; i++) {
                        await page.mouse.wheel(0, 50);
                    }
                };

                async function scrollArriba(veces) {
                    for (let i = 0; i < veces; i++) {
                        await page.mouse.wheel(0, -50);
                    }
                };
            };
        };
    });
};


//moduloConsulta(2)

module.exports.moduloConsulta = moduloConsulta;
