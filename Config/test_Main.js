/**** This file is to import driver packages, build browser *******/

const { By, Builder, Key } = require('selenium-webdriver');
const driver = new Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({ implicit: 90000 });
driver.manage().window().maximize();

before('Navigating to JIO Cinema TATA IPL', function () {
   driver.get(`${baseURL}/sports`);
});
class Main {
  constructor() {
    global.driver = driver;
    global.By = By;
    global.Key = Key;
    global.baseURL = 'https://www.jiocinema.com';
  }
}

after('Closing the Driver', function () {
   driver.quit();
});
module.exports = Main;
