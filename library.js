// var webdriver = require ('selenium-webdriver'),
//     By = webdriver.By,
//     until = webdriver.until;

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('http://google.com');
driver.get('http://facebook.com');
driver.quit();
