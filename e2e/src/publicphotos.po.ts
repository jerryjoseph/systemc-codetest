/**
*	PO Class: PublicPhotosPage
*	Page Object class for public photos page.
*/

import { browser, by, element } from 'protractor';

export class PublicPhotosPage {
  navigate() {
    return browser.get('/publicphotos');
  }
  
  getPhotoListItems() {
    return element.all(by.css('public-photos .flickr-feed-photos .flickr-feed-photo'));
  }
  
  scrollDown() {
	return browser.executeScript('window.scrollTo(0, document.body.scrollHeight);');
  }
  
  waitFor(waitTimeInMilliSec) {
	return browser.sleep(waitTimeInMilliSec);
  }
}
