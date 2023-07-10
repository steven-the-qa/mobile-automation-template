require('dotenv').config()
const appId: string = 'bs://app_id'
const projectName: string = 'App Name - iOS'
const buildName: string = 'version #.#.# build #'
import { Platform } from './types'
const { ios } = Platform
import type { Capabilities } from '@wdio/types'

export const iphone_12_pro_16 = {
    platformName: ios,
    "appium:app": appId,
    "bstack:options": {
        projectName: projectName,
        buildName: `iOS ${buildName}`,
        sessionName: `${buildName} - iPhone 12 Pro / 16`,
        deviceName: "iPhone 12 Pro",
        osVersion: "16",
        networkLogs: true,
        networkLogsOptions: {
            captureContent: true
        },
        interactiveDebugging: true
    },
}

export const iphone_13_pro_15 = {
    platformName: ios,
    "appium:app": appId,
    "bstack:options": {
        projectName: projectName,
        buildName: `iOS ${buildName}`,
        sessionName: `${buildName} - iPhone 13 Pro / 15`,
        deviceName: "iPhone 13 Pro",
        osVersion: "15",
        networkLogs: true,
        networkLogsOptions: {
            captureContent: true
        },
        interactiveDebugging: true
    },
}

function determineDevices(): Capabilities.RemoteCapabilities {
    if (!process.env.DEVICES) return [iphone_12_pro_16,iphone_13_pro_15]

    let devicesList: Capabilities.RemoteCapabilities = [];
    process.env.DEVICES.includes('iphone_12_pro_16') && devicesList.push(iphone_12_pro_16)
    process.env.DEVICES.includes('iphone_13_pro_15') && devicesList.push(iphone_13_pro_15)

    if (devicesList.length == 0) {
        return [iphone_12_pro_16,iphone_13_pro_15]
    }

    return devicesList
}

export const devicesToRun: Capabilities.RemoteCapabilities = determineDevices()