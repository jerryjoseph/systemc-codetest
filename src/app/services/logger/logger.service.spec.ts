/**
*	Unit tests for AppLoggerService
*/

import { TestBed } from '@angular/core/testing';
import { AppLoggerService } from './logger.service';

describe('services\\logger', () => {
    it('should create the service', () => {
        const service: AppLoggerService = TestBed.get(AppLoggerService);
        expect(service).toBeTruthy();
    });
  
    // "console.log" won't work inside this test because we are mocking it.
    it('should be callable - log(message)', () => {
        const service: AppLoggerService = TestBed.get(AppLoggerService);
    
        let message = 'There is an error';
	
        let logSpy = spyOn(console, 'log').and.callFake(function(msg) {
	        expect(msg).toEqual(message);
        });
	
        service.log(message);
    });
  
    // "console.error" won't work inside this test because we are mocking it.
    it('should be callable - logError(error)', () => {
        const service: AppLoggerService = TestBed.get(AppLoggerService);
    
        let error = { message: 'There is an error' };
	
        let logSpy = spyOn(console, 'error').and.callFake(function(msgPart1, msgPart2) {
	        expect(msgPart1).toEqual('An error occurred:');
	        expect(msgPart2).toEqual(error.message);
        });
	
        service.logError(error);
    });
  
    // "console.error" won't work inside this test because we are mocking it.
    it('should be callable - logHttpErrorResponse(error)', () => {
        const service: AppLoggerService = TestBed.get(AppLoggerService);
    
        let error = { message: 'The requested page is not found', status: 404, statusText: 'Not Found', url: 'http://localhost:4200/myphotos'  };
	
        let logSpy = spyOn(console, 'error').and.callFake(function(msgPart1, msgPart2, msgPart3, msgPart4, msgPart5, msgPart6, msgPart7) {
	        expect(msgPart1).toEqual('Http failure response for');
	        expect(msgPart2).toEqual(error.url);
	        expect(msgPart3).toEqual(':');
	        expect(msgPart4).toEqual(error.statusText);
	        expect(msgPart5).toEqual('( Status Code:');
	        expect(msgPart6).toEqual(error.status);
	        expect(msgPart7).toEqual(')');
        });
	
        service.logHttpErrorResponse(error);
    });
});
