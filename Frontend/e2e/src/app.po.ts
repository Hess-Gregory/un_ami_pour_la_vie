import { browser, by, element } from 'protractor';

export class AppPage {
  getTitleText(): any {
    throw new Error('Method not implemented.');
  }
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
