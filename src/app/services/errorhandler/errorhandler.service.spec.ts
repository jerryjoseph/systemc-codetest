/**
*	Unit tests for AppErrorHandlerService
*/

import { TestBed } from '@angular/core/testing';
import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { AppLoggerService } from '../logger/logger.service';
import { AppErrorHandlerService } from './errorhandler.service';
import { AppErrorComponent } from '../../components';

describe('services\\errorhandler', () => {
  const routes: Routes = [
	  { path: 'error', component: AppErrorComponent }
  ];
  
  beforeEach(() => TestBed.configureTestingModule({
	declarations: [
		AppErrorComponent
	],
	
	imports: [
		RouterTestingModule.withRoutes(routes),
	],
	
	providers: [
		AppErrorHandlerService
	]
  }));

  it('should create the service', () => {
    const service: AppErrorHandlerService = TestBed.get(AppErrorHandlerService);
    expect(service).toBeTruthy();
  });
  
  it('should be callable - handleError(error)', () => {
    const service: AppErrorHandlerService = TestBed.get(AppErrorHandlerService);
    
	let logErrorSpy = spyOn(AppLoggerService.prototype, 'logError').and.stub();
	let logHttpErrorResponseSpy = spyOn(AppLoggerService.prototype, 'logHttpErrorResponse').and.stub();
	
	let error = { message: 'There is an error' };
	service.handleError(error);
	
	expect(logErrorSpy).toHaveBeenCalledTimes(1);
	expect(logHttpErrorResponseSpy).toHaveBeenCalledTimes(0);
	
	logErrorSpy.calls.reset();
	logHttpErrorResponseSpy.calls.reset();
	
	let httpError = new HttpErrorResponse({ status: 404, statusText: 'Not Found', url: 'http://localhost:4200/myphotos' });
	service.handleError(httpError);
	
	expect(logErrorSpy).toHaveBeenCalledTimes(0);
	expect(logHttpErrorResponseSpy).toHaveBeenCalledTimes(1);
	
	logErrorSpy.calls.reset();
	logHttpErrorResponseSpy.calls.reset();
  });
});
