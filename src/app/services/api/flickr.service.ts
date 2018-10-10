/**
*	Service: FlickrApiService
*	A middleware for Flickr web api services.
*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class FlickrApiService {
    private publicPhotosUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';

    constructor(private http: HttpClient) { }

	/**
	*	@desc Returns the JSON response provided by Flickr as an Observable object.
	*	@returns {Observable.of([object Object])}
	*/
    getPublicPhotos(): Observable<any> {
        return this.http
	        .jsonp<any>(this.publicPhotosUrl, 'jsoncallback')
	        .catch(this.handleError);
    }

	/**
	*	@desc Catches the error threw by http calls and returns the observable sequence that terminates exceptionally with the specified exception object.
	*	@param {HttpErrorResponse} error: The error object
	*	@returns {Observable}
	*/
    private handleError (error: HttpErrorResponse | any) {
        return Observable.throw(error);
    }
}
