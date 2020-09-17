import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Lights App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display lightbulb', () => {
    page.navigateTo();
    expect(page.isLightBulbDisplayed()).toEqual(true);
  });

  it('should display power button', () => {
    page.navigateTo();
    expect(page.isPowerButtonDisplayed()).toEqual(true);
  });

  it('should switch to dark mode', () => {
    page.navigateTo();
    expect(page.switchToDarkMode()).toEqual(true);
  });

  it('should switch to light mode', () => {
    page.navigateTo();
    expect(page.switchToLightMode()).toEqual(true);
  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
