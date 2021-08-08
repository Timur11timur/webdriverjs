# Source
https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs

## Settings
const {Builder, By, until} = require('selenium-webdriver');

let driver = new Builder()
.forBrowser('chrome')
.build();

# Commands

- driver.get('http://google.com');
- driver.findElement();
- driver.findElements();
-  ... .getText().then(function(txt){console.log(txt);});
- driver.sleep(1000);
- driver.quit();