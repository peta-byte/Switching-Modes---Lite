import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  isLightBulbDisplayed(): Promise<boolean> {
    return element(by.className('bulb')).isDisplayed() as Promise<boolean>;
  }

  isPowerButtonDisplayed(): Promise<boolean> {
    return element(by.className('power-btn')).isDisplayed() as Promise<boolean>;
  }

  switchToDarkMode(): Promise<boolean> {
    element(by.className('power-btn')).click();
    return element(by.className('dark-mode')).isPresent() as Promise<boolean>;
  }

  switchToLightMode(): Promise<boolean> {
    element(by.className('power-btn')).click();
    element(by.className('power-btn')).click();
    return element(by.className('light-mode')).isPresent() as Promise<boolean>;
  }
}
