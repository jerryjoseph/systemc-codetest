/**
*	Component: PublicPhotosComponent
*	Responsible for rendering a view by managing its data, template and styles.
*/

import { Component, OnInit } from '@angular/core';
import { StringUtils } from '../../utils';
import { FlickrApiService } from '../../services';

@Component({
    selector: 'public-photos',
    templateUrl: './public-photos.component.html',
    styleUrls: ['./public-photos.component.less']
})
export class PublicPhotosComponent implements OnInit {
    constructor(private flickrApiService: FlickrApiService) { }

    private photoList: any;
    private photoListItemsTotalCount: any;
    private photoListPage = { items: [] };
  
    private isLoading = false;

    private scrollBarEnabled = false;
  
    private throttle = 150;
    private scrollDistance = 1;
    private scrollUpDistance = 2;
    
    private noTitlePlaceHolder = '*** NO-TITLE ***';
    private dateFormat = 'dd MMM yy: HH:mm';
    private daySuffixRequired = true;
  
	// Create a local reference of StringUtils to use it inside the view template
    private stringUtils = StringUtils;

	/**
	*	@desc A callback method that is invoked immediately after the default change detector has checked the directive's
	*		  data-bound properties for the first time, and before any of the view or content children have been checked.
	*/
    ngOnInit() {
        this.showPublicPhotos();
    }

	/**
	*	@desc Renders the view with the data received as a response from flickrApiService.getPublicPhotos() method.
	*	@returns {void}
	*/
    showPublicPhotos() {
        this.isLoading = true;

        this.flickrApiService.getPublicPhotos().subscribe(data => {
	        this.isLoading = false;

	        if (!this.photoList) {
	            this.photoList = data;
	        }
	        else {
	            this.photoList.items = this.photoList.items.concat(data.items);
	        }
	  
	        if (!this.scrollBarEnabled) {
	            this.loadMoreDataIfNoScrollbar();
	        }
        });
    }

	/**
	*	@desc Subscribe function for window scroll event and fires whenever a scroll event happened in the component view.
	*	@returns {void}
	*/
    onScrollDown() {
        this.showPublicPhotos();
    }
  
	/**
	*	@desc Checks whether the application page has visible vertical scrollbar and enabled for perform the scroll.
	*	@returns {boolean}
	*/
    private hasVerticalScrollbar() {
        return document.documentElement.scrollHeight > document.documentElement.clientHeight;
    }

	/**
	*	@desc We need the vertical scrollbar accessible to make the infinite scroll work correctly.
	*		  This method checks for it and load more data from flickrApiService if required until
	*		  the vertical scroll bar becomes enabled.
	*	@returns {void}
	*/
    private loadMoreDataIfNoScrollbar() {
        let self = this,
	        tryCount = 0,
	        maxTryCount = 50;
	
		// Wait to render the view content for the initial data recevied from Flickr
        let timer = setInterval(function() {
	        tryCount++;
		
	        if (tryCount === maxTryCount) {
		        clearInterval(timer);
	        }
		
	        let listItems = document.getElementsByClassName('flickr-feed-photo');
		
			// Check for scrollbar presence once the data has rendered
	        if (listItems.length) {
		        clearInterval(timer);

				// Load more data if the vertical scrollbar is not present
		        if (!self.hasVerticalScrollbar()) {
			        self.showPublicPhotos();
		        }
		        else {
					// Set this to true to not call this method anymore as we have the vertical scrollbar present now
			        self.scrollBarEnabled = true;
		        }
	        }
        }, 100);
    }
}
