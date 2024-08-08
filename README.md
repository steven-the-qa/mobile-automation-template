# Use WebdriverIO to test a cross-platform mobile app

## Introduction

Automate tests for your Android & iOS apps using WebdriverIO & TypeScript!

## GitHub Repo

<a href="https://github.com/steven-the-qa/mobile-automation-template" target="_blank" rel='noopener noreferrer'>
   https://github.com/steven-the-qa/mobile-automation-template
</a>

## Tech Stack

- WebdriverIO (Appium support)
- TypeScript (type safety)
- NodeJS (writing to the file system)
- Cucumber (supported out-of-the-box via WebdriverIO's CLI)
- BrowserStack (devices)

## Getting Started

1. Install Node 16 or higher
2. Clone the repo
3. From the `ios` and `android` directories, run `npm install` to install dependencies

That's it! At this point, you should be able to run tests.

## Run Tests Locally

### Running all tests for either Android or iOS

1. Navigate to the directory of either the `android` or `ios` project
2. Run `npm run all` to run all tests in the project

### Running a single test

1. Navigate to the directory of either the `android` or `ios` project
2. Run `npm run test features/{name}.feature` using the name of your feature file

### Running multiple tests

1. Navigate to the directory of either the `android` or `ios` project
2. Run `npm run test {feature_path_1} {feature_path_2} etc...`

### Run on 1 or more devices

1. Navigate to the directory of either the `android` or `ios` project
2. DEVICE={device_name1} {device_name2} npm run test {feature_path}

iOS Devices:

- iphone_12_pro_16
- iphone_13_pro_15

Android Devices:

- pixel_6_12
- galaxy_s21_12
