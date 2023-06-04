/******* This Page has Selenium Webdriver Methods, To Improve Code Reusability *********/

const { until } = require('selenium-webdriver');
const Test_Main = require('../Config/test_Main');

class Test_BasePage extends Test_Main {
 

  async test_ToSleep(ms) {
    await driver.sleep(ms);
  }

  async test_ScrollBy(eventToPerform) {
    await driver.executeScript(eventToPerform);
  }

  async test_SearchByText(css, searchText) {
    await driver.findElement(By.id(css)).sendKeys(searchText,Key.RETURN);
  }

  async test_ClickLinkText(text) {
    await driver.findElement(By.partialLinkText(text)).click();
  }

  async test_GetLinkText(text) {
    return await driver.findElement(By.partialLinkText(text)).getText();
  }

  async test_GetClassText(className) {
    return await driver.findElement(By.className(className)).getText();
  }

  async test_GetXpathText(path) {
    return await driver.findElement(By.xpath(path)).getText();
  }

  async test_ClickByXpath(path) {
    await driver.findElement(By.xpath(path)).click();
  }

  async test_FindByXpath(path) {
    await driver.findElement(By.xpath(path));
  }

  async test_FindClass(className) {
    return await driver.findElement(By.className(className));
  }

  async test_FindXpathGroup(panel, path) {
    return await panel.findElements(By.xpath(path));
  }

  async test_FindGroupText(panel, path) {
    return await panel.findElements(By.xpath(path)).getText();
  }
  // async XPath(path) {
  //   return await driver.findElement(By.xpath(path));
  // }

  async test_ClickByClass(className) {
    await driver.findElement(By.className(className)).click();
  }

  async test_FindClassElements(element, className) {
    return await element.findElements(By.className(className));
  }

  async test_FindByCss(tag) {
    return await driver.findElement(By.css(tag));
  }

  async test_FindByXpath(path){
    return await driver.findElement(By.xpath(path));
  }

  async test_GetAttribute(element,attribute){
    return await element.getAttribute(attribute);
  }

  async test_Wait(className) {
    await driver.wait(until.elementLocated(By.className(className)), 30000);
  }

 
}

module.exports = Test_BasePage;
