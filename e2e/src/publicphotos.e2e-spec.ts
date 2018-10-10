/**
*	E2E tests for public photos page
*/

import { PublicPhotosPage } from './publicphotos.po';

describe('Flickr app - public photos page', () => {
  let page: PublicPhotosPage;

  beforeEach(() => {
    page = new PublicPhotosPage();
  });
  
  it('should load', (done) => {
    page.navigate();
	
	page.getPhotoListItems().then(function(photoListItems) {
		expect(photoListItems instanceof Array).toBeTruthy();
		expect(photoListItems.length).toEqual(20);

		page.scrollDown().then(function() {
			
			page.waitFor(3000).then(function() {
				
				page.getPhotoListItems().then(function(photoListItems) {
					expect(photoListItems.length).toBeGreaterThan(20);
					done();
				});
			});
		});
	});
  });
});
