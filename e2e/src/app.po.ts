/**
*	PO Class: AppPage
*	Page Object class for application landing page.
*/

import { browser, by, element } from 'protractor';

export class AppPage {
  navigate() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }
  
  getPageLinks() {
    return element.all(by.css('app-root .flickr-page-link'));
  }
}
