# Unit tests project

## Description

Project goal is to use test tools on an authentication service which will be implemented in a student meeting app.

## Installation

### Prerequisites

Make sure Node.js and mongodb are installed on your computer.
If you're using Windows, make sure you have paths correctly defined in order to use these two tools.
Refer to these tools documentation if you need help in order to make them working.

### Get the project

In your terminal, move to your chosen directory and clone the repository (working git installation needed): 
```
git clone git@github.com:gwNOimie/tu-test-passport.git
```
or download sources from repository [https://github.com/gwNOimie/tu-test-passport]

### Install dependencies

Move into the project folder and install packages: 
```
npm install
```

### Set mongoDB configuration

Edit the file `config/mongodb.js` to correspond to your mongoDB configuration.

## Usage

### Launch application

Launch: 
```
npm start
``` 

Open a browser (like Firefox or Google Chrome ) and navigate to [http://localhost:3000] to view app.

Welcome to the application !

## Testing

### Run unit tests

To run unit tests, open a terminal and launch the command
```
npm run test                // linux & mac

                            // or

nmp run test-win            // windows
```

### Generate coverage report from unit tests

To generate coverage report from unit tests, open a terminal and launch the command
```
npm run test:coverage       // linux & mac

                            // or

nmp run test-win:coverage   // windows
```
Generated coverage will be displayed launching `coverage/lcov-report/index.html` from your project path threw a navigator.

### Run functional tests

To run functional tests with NightWatch you need Google Chrome installed on your device.
Then, you can run 
```
npm run nw                // linux & mac

                            // or

nmp run nw-win            // windows
```
