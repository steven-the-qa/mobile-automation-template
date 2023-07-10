# Mobile Automation Framework

### Introduction
Automate tests for your Android & iOS apps using WebdriverIO & TypeScript!

### Tech Stack
- WebdriverIO (Appium support)
- TypeScript (type safety)
- NodeJS (writing to the file system)
- Cucumber (supported out-of-the-box via WebdriverIO's CLI)
- BrowserStack (devices)

## Getting Started

This section is written assuming you want to contribute to this framework.

First, make sure you have Node 16 installed on your computer. I use Node 16.15.1.

First, make sure to clone the repo. Then, within the `ios` and `android` directories, run `npm install` to install dependencies.

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

### Contribute
My website has plenty of ways to contact me: https://www.stevenboutcher.com.

I prefer LinkedIn or email!