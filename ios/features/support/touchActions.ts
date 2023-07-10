import { driver } from '@wdio/globals'
import { ChainablePromiseElement } from 'webdriverio';

export async function scrollIntoView(elementToScrollTo: ChainablePromiseElement<WebdriverIO.Element>) {
    // Start in the horizontal middle & 60% down the screen
    // End the swipe 20% from the top of the screen
    const rect = await driver.getWindowRect()
    const startX = rect.width / 2;
    const startY = rect.height * 0.6;
    const endY = rect.height * 0.2;

    while (!(await elementToScrollTo.isDisplayed())) {
        driver.touchAction([
            { action: 'press', x: startX, y: startY },
            { action: 'wait', ms: 300 },
            { action: 'moveTo', x: startX, y: endY },
            { action: 'wait', ms: 200 },
            'release'
        ])
    }
}

export async function dismiss_native_alerts(numberOfPopups: number=1) {
    for (let i=0; i < numberOfPopups; i++) {
        if (await driver.getAlertText()) {
            await driver.acceptAlert()
        }
    }
}

export async function scrollUp() {
    const rect = await driver.getWindowRect()
    const startX = rect.width / 2;
    const startY = rect.height * 0.2;
    const endY = rect.height * 0.6;

    driver.touchAction([
        { action: 'press', x: startX, y: startY },
        { action: 'wait', ms: 300 },
        { action: 'moveTo', x: startX, y: endY },
        { action: 'wait', ms: 200 },
        'release'
    ])
}