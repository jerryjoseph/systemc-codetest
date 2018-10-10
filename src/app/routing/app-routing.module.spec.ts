/**
*	Unit tests for AppRoutingModule
*/

import { NgZone } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppRoutingModule } from './app-routing.module';
import { DateFormatter } from '../pipes';
import { AppErrorComponent, PublicPhotosComponent } from '../components';

describe('routing', () => {
    let ngZone: NgZone;
    let location: Location;
    let router: Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
	            DateFormatter,
	            AppErrorComponent,
                PublicPhotosComponent
            ],
	  
	        imports: [
	            RouterTestingModule.withRoutes(AppRoutingModule.getRoutes()),
	            HttpClientTestingModule,
	            InfiniteScrollModule
	        ]
        }).compileComponents();

        ngZone = TestBed.get(NgZone);
        location = TestBed.get(Location);
        router = TestBed.get(Router);
    });
  
    it('should create the routing module', () => {
        const appRoutingModule = new AppRoutingModule();
        expect(appRoutingModule).toBeTruthy();
    });

    it('should navigate to "/"', fakeAsync(() => {
        // Navigation should trigger inside Angular zone to avoid warnings
        ngZone.run(() => {
	        router.navigate(['']);
	        tick(50);
	        expect(location.path()).toBe('/publicphotos');
        });
    }));
  
    it('should navigate to "/publicphotos"', fakeAsync(() => {
        // Navigation should trigger inside Angular zone to avoid warnings
        ngZone.run(() => {
	        router.navigate(['publicphotos']);
	        tick(50);
	        expect(location.path()).toBe('/publicphotos');
        });
    }));
});
