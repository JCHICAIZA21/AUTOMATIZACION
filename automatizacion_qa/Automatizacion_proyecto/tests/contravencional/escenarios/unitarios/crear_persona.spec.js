const APPROOT = require('app-root-path');
const { LIBRERIAS } = require(APPROOT.path + '/varios/librerias.js');
LIBRERIAS.test.test;

const datosPersona = {
    numeroDoc: '7184391671',
    prueba: 'hola',
}



async function crearPersona() {
    test('Crear persona', async ({ page }) => {

        await page.goto('http://10.11.252.31:8080/Contravencional');


        await page.waitForTimeout(2000);


        await page.locator('" Digitación"').click();


        // Click text=Registrar Persona
        await page.locator('text=Registrar Persona').click();


        // Select 1 ARREGLAR (TRAER TIPO DOC POR BD)
        await page.frameLocator('#iframeContenido').locator('text=Tipo de documento Cédula de CiudadaníaTarjeta de IdentidadCédula ExtranjeriaNITP >> select').selectOption('1');

        // Fill [placeholder="Documento"]
        await page.frameLocator('#iframeContenido').locator('[placeholder="Documento"]').fill(datosPersona.numeroDoc);

        await screenshot({ filename: APPROOT.path + '/screenshots/crear_persona/img' + uuidv4() + '.jpg' });

        // Click text=Buscar
        await page.frameLocator('#iframeContenido').locator('text=Buscar').click(); 

        await screenshot({ filename: APPROOT.path + '/screenshots/crear_persona/img' + uuidv4() + '.jpg' });

        await page.waitForTimeout(2000);

        // Fill text=Documento 888 Tipo de Documento Cédula de Ciudadanía Fecha Expedición >> [placeholder="Fecha\ dd\/mm\/aaaa"]
        await page.frameLocator('#iframeContenido').locator(`text=Documento ${datosPersona.numeroDoc} Tipo de Documento Cédula de Ciudadanía Fecha Expedición >> [placeholder="Fecha\\ dd\\/mm\\/aaaa"]`).fill('01/01/2017');

        // Fill [placeholder="Primer\ Nombre"]
        await page.frameLocator('#iframeContenido').locator('[placeholder="Primer\\ Nombre"]').fill('PRUEBA');

        // Fill [placeholder="Segundo\ Nombre"]
        await page.frameLocator('#iframeContenido').locator('[placeholder="Segundo\\ Nombre"]').fill('PRUEBA');

        // Fill [placeholder="Primer\ Apellido"]
        await page.frameLocator('#iframeContenido').locator('[placeholder="Primer\\ Apellido"]').fill('PRUEBA');

        // Fill [placeholder="Segundo\ Apellido"]
        await page.frameLocator('#iframeContenido').locator('[placeholder="Segundo\\ Apellido"]').fill('PRUEBA');

        // Fill text=Fecha de Nacimiento País Nacimiento Colombia Departamento Nacimiento Municipio N >> [placeholder="Fecha\ dd\/mm\/aaaa"]
        await page.frameLocator('#iframeContenido').locator('text=Fecha de Nacimiento País Nacimiento Colombia Departamento Nacimiento Municipio N >> [placeholder="Fecha\\ dd\\/mm\\/aaaa"]').fill('01/01/1999');

        // Select 1
        await page.frameLocator('#iframeContenido').locator('text=País Nacimiento Colombia >> select').selectOption('1');

        // Select 1
        await page.frameLocator('#iframeContenido').locator('text=Departamento Nacimiento ANTIOQUIAATLANTICOBOGOTABOLIVARBOYACACALDASCAQUETACAUCAC >> select').selectOption('1');

        // Select 1
        await page.frameLocator('#iframeContenido').locator('text=Municipio Nacimiento MEDELLINABRIAQUIALEJANDRIAAMAGAAMALFIANDESANGELOPOLISANGOST >> select').selectOption('1');

        // Select 1
        await page.frameLocator('#iframeContenido').locator('text=Estado Civil CASADO (A)DIVORCIADO (A)VIUDO (A)SOLTERO(A) >> select').selectOption('1');

        // Select 1
        await page.frameLocator('#iframeContenido').locator('text=Género FEMENINOMASCULINO >> select').selectOption('1');

        // Select 1
        await page.frameLocator('#iframeContenido').locator('text=Grupo Sanguíneo y RH O+O-A+A-B+B-AB+AB- >> select').selectOption('1');

        // Fill [placeholder="Correo\ Electronico"]
        await page.frameLocator('#iframeContenido').locator('[placeholder="Correo\\ Electronico"]').fill('CORREO@CORREO.COM');

        await screenshot({ filename: APPROOT.path + '/screenshots/crear_persona/img' + uuidv4() + '.jpg' });

        // Click text=Agregar nueva dirección
        await page.frameLocator('#iframeContenido').locator('text=Agregar nueva dirección').click();

        // Fill text=Dirección Dirección principal >> input[type="text"]
        await page.frameLocator('#iframeContenido').locator('text=Dirección Dirección principal >> input[type="text"]').fill('CALLE 1');

        // Check input[type="checkbox"]
        await page.frameLocator('#iframeContenido').locator('input[type="checkbox"]').check();

        // Select 1
        await page.frameLocator('#iframeContenido').locator('text=Departamento ANTIOQUIAATLANTICOBOGOTABOLIVARBOYACACALDASCAQUETACAUCACESARCORDOBA >> select').selectOption('1');

        // Select 1
        await page.frameLocator('#iframeContenido').locator('text=Municipio MEDELLINABRIAQUIALEJANDRIAAMAGAAMALFIANDESANGELOPOLISANGOSTURAANORISAN >> select').selectOption('1');

        // Select 1
        await page.frameLocator('#iframeContenido').locator('text=Tipo Dirección CASATRABAJOPRINCIPAL >> select').selectOption('1');

        await screenshot({ filename: APPROOT.path + '/screenshots/crear_persona/img' + uuidv4() + '.jpg' });

        // Click #formularioDireccion >> text=Guardar
        await page.frameLocator('#iframeContenido').locator('#formularioDireccion >> text=Guardar').click();

        // Click text=Agregar nuevo teléfono
        await page.frameLocator('#iframeContenido').locator('text=Agregar nuevo teléfono').click();

        // Fill text=Número Guardar Cancelar >> input[type="text"]
        await page.frameLocator('#iframeContenido').locator('text=Número Guardar Cancelar >> input[type="text"]').fill('123123');

        await screenshot({ filename: APPROOT.path + '/screenshots/crear_persona/img' + uuidv4() + '.jpg' });

        // Click #formularioTelefono >> text=Guardar
        await page.frameLocator('#iframeContenido').locator('#formularioTelefono >> text=Guardar').click();

        // Click text=Agregar nueva licencia
        await page.frameLocator('#iframeContenido').locator('text=Agregar nueva licencia').click();

        // Fill text=Número de Licencia Categoría A1A2B1B2B3C1C2C3T5 >> input[type="text"]
        await page.frameLocator('#iframeContenido').locator('text=Número de Licencia Categoría A1A2B1B2B3C1C2C3T5 >> input[type="text"]').fill('123456789');

        // Select 1
        await page.frameLocator('#iframeContenido').locator('text=Categoría A1A2B1B2B3C1C2C3T5 >> select').selectOption('1');

        // Fill #fechaExpedicion
        await page.frameLocator('#iframeContenido').locator('#fechaExpedicion').fill('01/01/2018');

        // Fill #fechaVencimiento
        await page.frameLocator('#iframeContenido').locator('#fechaVencimiento').fill('01/01/2028');

        // Select 1
        await page.frameLocator('#iframeContenido').locator('text=Estado ActivaSuspendidaCancelada >> select').selectOption('1');

        // Select 212
        await page.frameLocator('#iframeContenido').locator('text=Organismo Tránsito Expedición STRIA TTEyTTO MCPAL SANTA FE ANTIOQUIASTRIA TTOyTT >> select').selectOption('212');

        // Select 1
        await page.frameLocator('#iframeContenido').locator('text=Restricciones CONDUCIR CON LENTESDISEÑO ESPECIAL DE VEHÍCULOCONDUCIR CON APARATO >> select').selectOption('1');

        await screenshot({ filename: APPROOT.path + '/screenshots/crear_persona/img' + uuidv4() + '.jpg' });

        // Click #formularioLicencia >> text=Agregar
        await page.frameLocator('#iframeContenido').locator('#formularioLicencia >> text=Agregar').click();

        await screenshot({ filename: APPROOT.path + '/screenshots/crear_persona/img' + uuidv4() + '.jpg' });

        // Click #formularioLicencia >> text=Guardar
        await page.frameLocator('#iframeContenido').locator('#formularioLicencia >> text=Guardar').click();

        // Click #formularioPersona >> text=Guardar
        page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => { });
        });

        await screenshot({ filename: APPROOT.path + '/screenshots/crear_persona/img' + uuidv4() + '.jpg' });

        await page.frameLocator('#iframeContenido').locator('#formularioPersona >> text=Guardar').click();

    });
};

//crearPersona();


module.exports.crearPersona = crearPersona;
module.exports.datosPersona = datosPersona;