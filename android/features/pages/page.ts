import { LocatorStrategy, Selector } from "../../types"
const { id, xpath } = LocatorStrategy

export default class Page {
    open(path: string) {
        return browser.url(path)
    }

    element(strategy: string, selector: string): ChainablePromiseElement {
        switch(strategy) {
            case id:
                return $(`id=${selector}`)
            case xpath:
                return $(selector)
        }
    }

    message(text: Selector): Selector {
        return text
    }
}
