/**
*	Unit tests for AppErrorComponent
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppErrorComponent } from './error.component';

describe('components\\app-error', () => {
    let component: AppErrorComponent;
    let fixture: ComponentFixture<AppErrorComponent>;
  
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppErrorComponent
            ]
        }).compileComponents();
	
        fixture = TestBed.createComponent(AppErrorComponent);
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
        expect(fixture.debugElement.nativeElement.querySelector('h2').textContent).toContain('Unexpected error occurred.');
    });
	
	it('should have the information message', () => {
        expect(fixture.debugElement.nativeElement.querySelector('h5').textContent).toContain('Please check the browser console for more details.');
    });
});
