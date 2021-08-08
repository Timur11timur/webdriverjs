const {Builder, By, until} = require('selenium-webdriver');

let driver = new Builder()
    .forBrowser('chrome')
    .build();

driver.get('https://library-app.firebaseapp.com/');
// driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.css('input'));
driver.findElement(By.css('.btn')).getText().then(function(txt){
    console.log('Button text: ' + txt);
});
driver.findElements(By.css('nav li')).then(function(elements) {
    elements.map(function (el) {
        el.getText().then(function(txt){
            console.log('li: ' + txt);
        });
    });
});
// driver.findElement(By.tagName('button')).click();
// driver.wait(until.titleIs('webdriver - Google Search'), 1000);

// driver.sleep(1000);
//driver.quit();
