const APPROOT = require('app-root-path');
const { LIBRERIAS } = require(APPROOT.path + '/varios/librerias.js');
const { FUNCIONESBD } = require(APPROOT.path + '/varios/funciones_bd.js');

LIBRERIAS.test.test;



test(`Liquidación de Trámite`, async ({ page }) => {
    await page.goto('http://10.11.252.31:8080/AdministradorOT/login.html#/login');
    console.log('prueba');
    
})

