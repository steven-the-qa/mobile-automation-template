const fs = require('fs')

// For debugging
export async function logXML() {
    await driver.getPageSource()
}

export async function xmlScreenshot (fileName: string) {
    const pageSource = await driver.getPageSource()

    await fs.promises.mkdir('./screenshots/xml', { recursive: true }).then(async () => {
        await fs.promises.writeFile(`./screenshots/xml/${fileName}.xml`, pageSource)
    });
}

export async function pngScreenshot(fileName: string) {
    await fs.promises.mkdir('./screenshots/png', { recursive: true }).then(async () => {
        await driver.saveScreenshot(`./screenshots/png/${fileName}.png`);
    });
}