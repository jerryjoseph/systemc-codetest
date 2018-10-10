/**
*	E2E tests for application landing page
*/

import { AppPage } from './app.po';

describe('Flickr app - landing page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should load', () => {
    page.navigate();
	
    expect(page.getTitleText()).toEqual('Flickr feeds');
	expect(page.getPageLinks().count()).toEqual(1);
  });
});
