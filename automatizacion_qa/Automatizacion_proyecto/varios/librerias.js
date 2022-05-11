const APPROOT = require('app-root-path');

const LIBRERIAS = {
    test: {
        test: { test } = require('@playwright/test'),
        chromium: { chromium } = require('@playwright/test'),
        expect: { expect } = require('@playwright/test'),
    },
    screenshot: screenshot = require('screenshot-desktop'),
    uuid: { v4: uuidv4 } = require('uuid'), // hash para no sobreescribir imagen (asigna hash aleatorio al nombre de la imagen).
}

module.exports.LIBRERIAS = LIBRERIAS;
