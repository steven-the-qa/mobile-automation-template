import { driver } from '@wdio/globals'
import { ChainablePromiseElement } from 'webdriverio';

export async function scrollIntoView(elementToScrollTo: ChainablePromiseElement<WebdriverIO.Element>) {
    // Start in the horizontal middle & 85% down the screen
    // End the swipe 1% from the top of the screen
    const rect = await driver.getWindowRect()
    const startX = rect.width / 2;
    const startY = rect.height * 0.8;
    const endY = rect.height * 0.2;

    while (!(await elementToScrollTo.isDisplayed())) {
        await driver.touchAction([
            { action: 'press', x: startX, y: startY },
            { action: 'moveTo', x: startX, y: endY },
            { action: 'release' }
        ])
    }
}