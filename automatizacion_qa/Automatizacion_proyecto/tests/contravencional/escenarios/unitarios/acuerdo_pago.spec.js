const APPROOT = require('app-root-path');
const { LIBRERIAS } = require(APPROOT.path + '/varios/librerias.js');
const { FUNCIONESBD } = require(APPROOT.path + '/varios/funciones_bd.js');
const MODULOS = { persona } = require(APPROOT.path + '/tests/modulos.spec.js');

LIBRERIAS.test.test;

async function acuerdoPago(cantidadComp) {
    test('Acuerdo pago', async ({ page }) => {

        await page.goto('http://10.11.252.31:8080/Contravencional');

        var usarPersona = MODULOS.persona = datosPersona.numeroDoc;

        // Click text=Acuerdo Pago
        await page.click('text=Acuerdo Pago');

        // Click #menu44 >> text=Generar
        await page.click('#menu44 >> text=Generar');

        // Select 1
        await page.frame({
            name: 'iframeContenido'
        }).selectOption('select', '1');

        // Click [placeholder="Documento"]
        await page.frame({
            name: 'iframeContenido'
        }).click('[placeholder="Documento"]');

        // Fill [placeholder="Documento"]
        await page.frame({
            name: 'iframeContenido'
        }).fill('[placeholder="Documento"]', usarPersona);

        // Press Tab
        await page.frame({
            name: 'iframeContenido'
        }).press('[placeholder="Documento"]', 'Tab');

        // Press ArrowDown
        await page.frame({
            name: 'iframeContenido'
        }).press('text=Entidad Otras EntidadesPOLCA >> select', 'ArrowDown');

        // Press Tab
        await page.frame({
            name: 'iframeContenido'
        }).press('text=Entidad Otras EntidadesPOLCA >> select', 'Tab');

        // Press ArrowDown
        await page.frame({
            name: 'iframeContenido'
        }).press('text=Tipo Comparendo OtrosFoto Deteccion >> select', 'ArrowDown');

        // Press Tab
        await page.frame({
            name: 'iframeContenido'
        }).press('text=Tipo Comparendo OtrosFoto Deteccion >> select', 'Tab');

        await screenshot({ filename: APPROOT.path + '/screenshots/acuerdo_pago/img' + uuidv4() + '.jpg' });

        // Click text=Buscar
        await page.frame({
            name: 'iframeContenido'
        }).click('text=Buscar');

        await page.waitForTimeout(2000);

        await seleccionarcheckbox(cantidadComp);

        async function seleccionarcheckbox(cantidadComp1) {
            var comparendoExiste = await FUNCIONESBD.bd.comparendoExistente(cantidadComp1);
            for (let i = 0; i < comparendoExiste.length; i++) {
                const comp = comparendoExiste[i];
                const infoComp = await FUNCIONESBD.bd.infoComparendo(comp);
                var entidad = infoComp.info = agente

                await page.frameLocator('#iframeContenido').locator(`text=${comp} ${entidad} >> input[type="checkbox"]`).check();
            }

        }

        await screenshot({ filename: APPROOT.path + '/screenshots/acuerdo_pago/img' + uuidv4() + '.jpg' });

        // Click button:has-text("Generar")
        await page.frameLocator('#iframeContenido').locator('button:has-text("Generar")').click();

        await page.waitForTimeout(4000);


        // Fill #porcentajeCuota
        await page.frameLocator('#iframeContenido').locator('#porcentajeCuota').fill('22');


        // Select 5
        await page.frameLocator('#iframeContenido').locator('text=Número Cuotas 234567891011121314151617181920212223242526272829303132333435363738 >> select').selectOption('5');

        // Click text=Calcular
        await page.frameLocator('#iframeContenido').locator('text=Calcular').click();

        await page.waitForTimeout(2000);

        await screenshot({ filename: APPROOT.path + '/screenshots/acuerdo_pago/img' + uuidv4() + '.jpg' });


        // Click #formularioGenerar >> text=Guardar
        await page.frameLocator('#iframeContenido').locator('#formularioGenerar >> text=Guardar').click();

        await screenshot({ filename: APPROOT.path + '/screenshots/acuerdo_pago/img' + uuidv4() + '.jpg' });

        // Click text=Descargar
        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.frameLocator('#iframeContenido').locator('text=Descargar').click()
        ]);
    });
};






//acuerdoPago();

module.exports.acuerdoPago = acuerdoPago;