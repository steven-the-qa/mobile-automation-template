require('dotenv').config()
const appId: string = 'bs://app_id'
const projectName: string = 'App Name - iOS'
const buildName: string = 'version #.#.# build #'
import { Platform } from './types'
const { android } = Platform
import type { Capabilities } from '@wdio/types'

export const pixel_6_12 = {
    platformName: android,
    "appium:app": appId,
    "bstack:options": {
        projectName: projectName,
        buildName: `Android ${buildName}`,
        sessionName: `${buildName} - Google Pixel 6 / 12.0`,
        deviceName: "Google Pixel 6",
        osVersion: "12.0",
        networkLogs: true,
        networkLogsOptions: {
            captureContent: true
        },
        interactiveDebugging: true,
    }
}

export const galaxy_s21_12 = {
    platformName: android,
    "appium:app": appId,
    "bstack:options": {
        projectName: projectName,
        buildName: `Android ${buildName}`,
        sessionName: `${buildName} - Samsung Galaxy S21 / 12.0`,
        deviceName: "Samsung Galaxy S21",
        osVersion: "12.0",
        networkLogs: true,
        networkLogsOptions: {
            captureContent: true
        },
        interactiveDebugging: true,
    },
}

function determineDevices(): Capabilities.RemoteCapabilities {
    if (!process.env.DEVICES) return [pixel_6_12,galaxy_s21_12]

    let devicesList: Capabilities.RemoteCapabilities = [];
    process.env.DEVICES.includes('pixel_6_12') && devicesList.push(pixel_6_12)
    process.env.DEVICES.includes('galaxy_s21_12') && devicesList.push(galaxy_s21_12)

    if (devicesList.length == 0) {
        return [pixel_6_12,galaxy_s21_12]
    }

    return devicesList
}

export const devicesToRun: Capabilities.RemoteCapabilities = determineDevices()