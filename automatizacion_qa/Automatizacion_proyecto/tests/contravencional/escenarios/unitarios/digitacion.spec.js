const APPROOT = require('app-root-path');
const { LIBRERIAS } = require(APPROOT.path + '/varios/librerias.js');
const { FUNCIONESBD } = require(APPROOT.path + '/varios/funciones_bd.js');




LIBRERIAS.test.test;


async function digitacion(fecha, persona,idtest,codigoInfraccion) {
  test(`Digitación comparendo ${idtest}`, async ({ page }) => {
    await page.goto('http://10.11.252.31:8080/Contravencional');

    //Obtiene numero comparendo nuevo de BD
    var nextSequence = await FUNCIONESBD.bd.getNextSequence();

    await page.waitForTimeout(2000);

    await page.locator('" Digitación"').click();

    //Captura de pantalla
    // await screenshot({ filename: APPROOT.path + '/screenshots/img_test_digitacion' + uuidv4() + '.jpg' });

    // Click en opción Comparendo Digitación
    await page.click('text=Comparendo Digitación');

    await page.waitForTimeout(3000);

    // Click input
    await page.frame({
      name: 'iframeContenido'
    }).click('input');

    // Fill input 
    await page.frame({
      name: 'iframeContenido',
    }).fill('input', nextSequence);

    // Press Tab
    await page.frame({
      name: 'iframeContenido'
    }).press('input', 'Tab')

    // Fill #numeroComparendoConfirm
    await page.frame({
      name: 'iframeContenido'
    }).fill('#numeroComparendoConfirm', nextSequence);

    // Press Tab
    await page.frame({
      name: 'iframeContenido'
    }).press('#numeroComparendoConfirm', 'Tab');

    await page.waitForTimeout(3000);

    //Obtiene entidad de la BD
    var entidad = await FUNCIONESBD.bd.entidadAgente();

    // Seleccionar entidad
    await page.frame({
      name: 'iframeContenido'
    }).selectOption('select', entidad);

    // Select 1
    await page.frame({
      name: 'iframeContenido'
    }).selectOption('text=Tipo de Comparendo Foto DeteccionElectronicoTransporteManual >> select', '1');

    // Press Tab
    await page.frame({
      name: 'iframeContenido'
    }).click('[placeholder="Fecha dd/mm/aaaa"]');

    // Press Enter
    await page.frame({
      name: 'iframeContenido'
    }).fill('[placeholder="Fecha dd/mm/aaaa"]', fecha);

    // Press Tab
    await page.frame({
      name: 'iframeContenido'
    }).press('[placeholder="Fecha dd/mm/aaaa"]', 'Tab');

    // Press Tab
    await page.frame({
      name: 'iframeContenido'
    }).press('button', 'Tab');

    // Fill [placeholder="HH"]
    await page.frame({
      name: 'iframeContenido'
    }).fill('[placeholder="HH"]', '01');

    // Press Tab
    await page.frame({
      name: 'iframeContenido'
    }).press('[placeholder="HH"]', 'Tab');

    // Press Tab
    await page.frame({
      name: 'iframeContenido'
    }).press('[placeholder="MM"]', 'Tab');

    //screenshot({ filename: appRoot.path + '/screenshots/img_test_digitacion' + uuidv4() + '.jpg' });

    //Obtiene infracción de la BD
    var infraccion = await FUNCIONESBD.bd.codigoInfraccionComparendo(codigoInfraccion);

    // Press ArrowDown
    await page.frame({
      name: 'iframeContenido'
    }).press('[aria-label="Infraccion"]', 'ArrowDown');

    // Seleccionar infracción
    await page.frame({
      name: 'iframeContenido'
    }).fill('[aria-label="Infraccion"]', infraccion);

    await page.waitForTimeout(2000);

    // Press ArrowDown
    await page.frame({
      name: 'iframeContenido'
    }).press('[aria-label="Infraccion"]', 'ArrowDown');

    await page.waitForTimeout(1000);

    // Press ArrowDown
    await page.frame({
      name: 'iframeContenido'
    }).press('[aria-label="Infraccion"]', 'ArrowDown');

    await page.waitForTimeout(1000);

    // Press ArrowDown
    await page.frame({
      name: 'iframeContenido'
    }).press('[aria-label="Infraccion"]', 'ArrowDown');

    // Press Enter
    await page.frame({
      name: 'iframeContenido'
    }).press('[aria-label="Infraccion"]', 'Enter');

    // Press Tab
    await page.frame({
      name: 'iframeContenido'
    }).press('[aria-label="Infraccion focus"]', 'Tab');

    // Select 1
    await page.frame({
      name: 'iframeContenido'
    }).selectOption('text=Vía Principal AVENIDA CALLEAUTOPISTAAVENIDAANILLO VIALCIRCULARCALLECARRERACARRET >> select', '1');

    // Click [placeholder="Número o Nombre"]
    await page.frame({
      name: 'iframeContenido'
    }).click('[placeholder="Número o Nombre"]');

    // Fill [placeholder="Número o Nombre"]
    await page.frame({
      name: 'iframeContenido'
    }).fill('[placeholder="Número o Nombre"]', '1');

    // Select 1
    await page.frame({
      name: 'iframeContenido'
    }).selectOption('text=Vía Secundaria AVENIDA CALLEAUTOPISTAAVENIDAANILLO VIALCIRCULARCALLECARRERACARRE >> select', '1');

    // Click #viaSecundaria
    await page.frame({
      name: 'iframeContenido'
    }).click('#viaSecundaria');

    // Fill #viaSecundaria
    await page.frame({
      name: 'iframeContenido'
    }).fill('#viaSecundaria', '1');

    // Click [aria-label="Localidad activate"]
    await page.frame({
      name: 'iframeContenido'
    }).click('[aria-label="Localidad activate"]');

    // Click text=Vehículo Extranjero Placa Matriculado En Organismo Transito Clase de Servicio Co >> input[type="text"]
    await page.frame({
      name: 'iframeContenido'
    }).click('text=Vehículo Extranjero Placa Matriculado En Organismo Transito Clase de Servicio Co >> input[type="text"]');

    // Fill text=Vehículo Extranjero Placa Matriculado En Organismo Transito Clase de Servicio Co >> input[type="text"]
    await page.frame({
      name: 'iframeContenido'
    }).fill('text=Vehículo Extranjero Placa Matriculado En Organismo Transito Clase de Servicio Co >> input[type="text"]', 'ABC123');

    // Press Tab
    await page.frame({
      name: 'iframeContenido'
    }).press('text=Vehículo Extranjero Placa Matriculado En Organismo Transito Clase de Servicio Co >> input[type="text"]', 'Tab');

    // Select 1
    await page.frame({
      name: 'iframeContenido'
    }).selectOption('text=Tipo Documento Cédula de CiudadaníaTarjeta de IdentidadCédula ExtranjeriaNITPasa >> select', '1');

    // Click text=Sin Infractor Tipo Documento Cédula de CiudadaníaTarjeta de IdentidadCédula Extr >> input[type="text"]
    await page.frame({
      name: 'iframeContenido'
    }).click('text=Sin Infractor Tipo Documento Cédula de CiudadaníaTarjeta de IdentidadCédula Extr >> input[type="text"]');

    // Fill text=Sin Infractor Tipo Documento Cédula de CiudadaníaTarjeta de IdentidadCédula Extr >> input[type="text"]
    await page.frame({
      name: 'iframeContenido'
    }).fill('text=Sin Infractor Tipo Documento Cédula de CiudadaníaTarjeta de IdentidadCédula Extr >> input[type="text"]', persona);

    // Press Tab
    await page.frame({
      name: 'iframeContenido'
    }).press('text=Sin Infractor Tipo Documento Cédula de CiudadaníaTarjeta de IdentidadCédula Extr >> input[type="text"]', 'Tab');

    await page.waitForTimeout(3000);

    // Fill text=Datos Del Agente Agente OT 0: JUAN LOPEZ001: POLICIA PROBANDO0012: HECTOR CARDON >> input[type="text"]
    await page.frame({
      name: 'iframeContenido'
    }).fill('input[id="placaAgente"]', '123');


    // Click text=Guardar
    await page.frame({
      name: 'iframeContenido'
    }).click('text=Guardar');

    //librerias.screenshot({ filename: appRoot.path + '/screenshots/img_test_digitacion' + uuidv4() + '.jpg' });

    // Click text=Aceptar
    await page.frame({
      name: 'iframeContenido'
    }).click('text=Aceptar');

    // Click text=Menu Principal Parametrización Parametrizar Autoridad de TransitoParametrizar De >> span
    await page.click('text=Menu Principal Parametrización Parametrizar Autoridad de TransitoParametrizar De >> span');

    // Click a:nth-child(23) .caret
    await page.click('a:nth-child(21) .caret');

    // Click text=Aprobar Comparendo
    await page.locator('" Aprobar Comparendo"').click();


    // buscar comparendo
    // Fill input[name="numeroComparendo"]
    await page.frame({
      name: 'iframeContenido'
    }).fill('input[name="numeroComparendo"]', nextSequence);


    // Clic checkbox del comparendo 
    await page.frame({
      name: 'iframeContenido'
    }).check('input[type="checkbox"]')

    // Click text=Aprobar Comparendos
    await page.frame({
      name: 'iframeContenido'
    }).click('text=Aprobar Comparendos');

    await page.waitForTimeout(2000);

    //await screenshot({ filename: appRoot.path + '/screenshots/img_test_digitacion' + uuidv4() + '.jpg' });

    // Click text=Aceptar
    await page.frame({
      name: 'iframeContenido'
    }).click('text=Aceptar', { button: 'right' });

  });
};




//digitacion('01/01/2022', '333', 1 ,'C30') 

module.exports.digitacion = digitacion; 