const APPROOT = require('app-root-path');
const { LIBRERIAS } = require(APPROOT.path + '/varios/librerias.js');
const MODULOSGRUPOS = { grupodigitacion } = require(APPROOT.path + '/tests/modulos.spec.js');
LIBRERIAS.test.test;
test.describe.parallel('suite', () => {
  test('runs in parallel 1', async ({ page }) => {
    var comparendos = 3
    MODULOSGRUPOS.grupodigitacion = { grupoDigitacion }.grupoDigitacion(comparendos)

  });
  test('runs in parallel 2', async ({ page }) => {
    await page.goto('http://10.11.252.31:8080/Contravencional');
  });
});