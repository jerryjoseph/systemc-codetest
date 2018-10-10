/**
*	Unit tests for PublicPhotosComponent
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DateFormatter } from '../../pipes';
import { FlickrApiService } from '../../services';
import { PublicPhotosComponent } from './public-photos.component';

describe('components\\public-photos', () => {
    let component: PublicPhotosComponent;
    let flickrApiService: FlickrApiService;
    let fixture: ComponentFixture<PublicPhotosComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ 
	            DateFormatter,
	            PublicPhotosComponent
	        ],
	  
	        imports: [
	            HttpClientTestingModule,
	            InfiniteScrollModule
	        ]
        })
        .compileComponents();
	
        fixture = TestBed.createComponent(PublicPhotosComponent);
        component = fixture.componentInstance;
	
        flickrApiService = TestBed.get(FlickrApiService);
        var publicPhotosJson = "{\"title\":\"Uploads from everyone\",\"link\":\"https://www.flickr.com/photos/\",\"description\":\"\",\"modified\":\"2018-10-05T09:18:03Z\",\"generator\":\"https://www.flickr.com\",\"items\":[{\"title\":\"coimbatore_shoutouts___BiqRrOyn9p6___\",\"link\":\"https://www.flickr.com/photos/155514145@N03/30193343357/\",\"media\":{\"m\":\"https://farm2.staticflickr.com/1948/30193343357_d05d7d4135_m.jpg\"},\"date_taken\":\"2018-10-05T08:06:31-08:00\",\"description\":\" <p><a href=\\\"https://www.flickr.com/people/155514145@N03/\\\">1977kvijay</a> posted a photo:</p> <p><a href=\\\"https://www.flickr.com/photos/155514145@N03/30193343357/\\\" title=\\\"coimbatore_shoutouts___BiqRrOyn9p6___\\\"><img src=\\\"https://farm2.staticflickr.com/1948/30193343357_d05d7d4135_m.jpg\\\" width=\\\"200\\\" height=\\\"240\\\" alt=\\\"coimbatore_shoutouts___BiqRrOyn9p6___\\\" /></a></p> \",\"published\":\"2018-10-05T09:18:03Z\",\"author\":\"nobody@flickr.com (\\\"1977kvijay\\\")\",\"author_id\":\"155514145@N03\",\"tags\":\"\"},{\"title\":\"4L5A5754.jpg\",\"link\":\"https://www.flickr.com/photos/97026955@N02/30193344167/\",\"media\":{\"m\":\"https://farm2.staticflickr.com/1947/30193344167_c0cfd016c9_m.jpg\"},\"date_taken\":\"2018-09-21T18:46:13-08:00\",\"description\":\" <p><a href=\\\"https://www.flickr.com/people/97026955@N02/\\\">heartmadeua</a> posted a photo:</p> <p><a href=\\\"https://www.flickr.com/photos/97026955@N02/30193344167/\\\" title=\\\"4L5A5754.jpg\\\"><img src=\\\"https://farm2.staticflickr.com/1947/30193344167_c0cfd016c9_m.jpg\\\" width=\\\"171\\\" height=\\\"240\\\" alt=\\\"4L5A5754.jpg\\\" /></a></p> \",\"published\":\"2018-10-05T09:18:08Z\",\"author\":\"nobody@flickr.com (\\\"heartmadeua\\\")\",\"author_id\":\"97026955@N02\",\"tags\":\"\"},{\"title\":\"Apple, Facebook xác nhận là nạn nhân phần mềm độc hại trên máy chủ SuperMicro\",\"link\":\"https://www.flickr.com/photos/dkntv/30193344937/\",\"media\":{\"m\":\"https://farm2.staticflickr.com/1905/30193344937_5c5ab2a1ca_m.jpg\"},\"date_taken\":\"2018-10-05T02:18:13-08:00\",\"description\":\" <p><a href=\\\"https://www.flickr.com/people/dkntv/\\\">feed.dkn.tv</a> posted a photo:</p> <p><a href=\\\"https://www.flickr.com/photos/dkntv/30193344937/\\\" title=\\\"Apple, Facebook xác nhận là nạn nhân phần mềm độc hại trên máy chủ SuperMicro\\\"><img src=\\\"https://farm2.staticflickr.com/1905/30193344937_5c5ab2a1ca_m.jpg\\\" width=\\\"240\\\" height=\\\"148\\\" alt=\\\"Apple, Facebook xác nhận là nạn nhân phần mềm độc hại trên máy chủ SuperMicro\\\" /></a></p> <p>via Đại Kỷ Nguyên - Feed - <a href=\\\"https://ift.tt/2y1WNYE\\\" rel=\\\"nofollow\\\">ift.tt/2y1WNYE</a></p>\",\"published\":\"2018-10-05T09:18:13Z\",\"author\":\"nobody@flickr.com (\\\"feed.dkn.tv\\\")\",\"author_id\":\"143112901@N08\",\"tags\":\"daikynguyen\"},{\"title\":\"Archaeological Survey in Castlereagh #Archaeology #Surveys #Castlereagh https://t.co/9WzDNPoGna\",\"link\":\"https://www.flickr.com/photos/archaeologistnearme/30193344957/\",\"media\":{\"m\":\"https://farm2.staticflickr.com/1969/30193344957_a64e7397e6_m.jpg\"},\"date_taken\":\"2018-10-05T02:18:13-08:00\",\"description\":\" <p><a href=\\\"https://www.flickr.com/people/archaeologistnearme/\\\">Archaeologist Near Me</a> posted a photo:</p> <p><a href=\\\"https://www.flickr.com/photos/archaeologistnearme/30193344957/\\\" title=\\\"Archaeological Survey in Castlereagh #Archaeology #Surveys #Castlereagh https://t.co/9WzDNPoGna\\\"><img src=\\\"https://farm2.staticflickr.com/1969/30193344957_a64e7397e6_m.jpg\\\" width=\\\"240\\\" height=\\\"148\\\" alt=\\\"Archaeological Survey in Castlereagh #Archaeology #Surveys #Castlereagh https://t.co/9WzDNPoGna\\\" /></a></p> <p>via Archaeologist Near Me <a href=\\\"https://archaeologistnearme.tumblr.com/post/178783971785\\\" rel=\\\"nofollow\\\">archaeologistnearme.tumblr.com/post/178783971785</a></p>\",\"published\":\"2018-10-05T09:18:13Z\",\"author\":\"nobody@flickr.com (\\\"Archaeologist Near Me\\\")\",\"author_id\":\"140243770@N08\",\"tags\":\"\"},{\"title\":\"Not much left of this Cello...\",\"link\":\"https://www.flickr.com/photos/141803402@N07/43318077090/\",\"media\":{\"m\":\"https://farm2.staticflickr.com/1907/43318077090_4eb44f634f_m.jpg\"},\"date_taken\":\"2017-03-26T10:39:00-08:00\",\"description\":\" <p><a href=\\\"https://www.flickr.com/people/141803402@N07/\\\">Andy Rainsford</a> posted a photo:</p> <p><a href=\\\"https://www.flickr.com/photos/141803402@N07/43318077090/\\\" title=\\\"Not much left of this Cello...\\\"><img src=\\\"https://farm2.staticflickr.com/1907/43318077090_4eb44f634f_m.jpg\\\" width=\\\"240\\\" height=\\\"153\\\" alt=\\\"Not much left of this Cello...\\\" /></a></p> <p>Marrakech, Morocco</p>\",\"published\":\"2018-10-05T09:17:51Z\",\"author\":\"nobody@flickr.com (\\\"Andy Rainsford\\\")\",\"author_id\":\"141803402@N07\",\"tags\":\"\"}]}";
        spyOn(flickrApiService, 'getPublicPhotos').and.returnValue(Observable.of(JSON.parse(publicPhotosJson)));
	
        fixture.detectChanges();
    });
  
    afterEach(() => {
        document.body.removeChild(fixture.nativeElement);
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });
  
    it('should render photo list items', () => {
        const photoListItems = fixture.debugElement.queryAll(By.css('.flickr-feed-photos .flickr-feed-photo'));
        expect(photoListItems instanceof Array).toBeTruthy();
        expect(photoListItems.length).toEqual(5);
    });
});
