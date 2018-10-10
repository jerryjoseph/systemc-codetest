/**
*	Unit tests for AppComponent
*/

import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('components\\app-root', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
  
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
	  
	        imports: [
	            RouterTestingModule
	        ]
        }).compileComponents();
	
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
	
        fixture.detectChanges();
    });
  
    afterEach(() => {
        document.body.removeChild(fixture.nativeElement);
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should have the title', () => {
        expect(fixture.debugElement.nativeElement.querySelector('h1').textContent).toContain('Flickr feeds');
    });
  
    it('should have page links', () => {
        const pageLinks = fixture.debugElement.queryAll(By.css('.flickr-page-link'));
        expect(pageLinks instanceof Array).toBeTruthy();
        expect(pageLinks.length).toEqual(1);
    });
});
