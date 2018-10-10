/**
*	ErrorHandler: AppErrorHandlerService
*	A middleware for handling all errors threw from any area of the application.
*/

import { ErrorHandler, Inject, Injectable, Injector, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppLoggerService } from '../logger/logger.service';

@Injectable()
export class AppErrorHandlerService implements ErrorHandler {
    constructor(
	    @Inject(AppLoggerService)
	    private loggerService: AppLoggerService,
		
	    @Inject(NgZone)
	    private ngZone: NgZone,
		
	    private injector: Injector
    ) { }
	
	/**
	*	@desc Catches the error raised from any area of the application, logs it and takes other necessary actions.
	*	@param {any} error: Error object of any error type
	*	@returns {void}
	*/
	handleError(error: any) {
	    // Instantiate here instead of from constructor to avoid cyclic dependency error from AppModule
	    let router = this.injector.get(Router);
		
	    if (error instanceof HttpErrorResponse) {
		    // Handle unsuccessful response codes such as 404, 500 etc.
		    this.loggerService.logHttpErrorResponse(error);
	    } else {
		    // Handle other errors suchs as client-side or network error.
		    this.loggerService.logError(error);        
	    }
		
	    // use ngZone.run() to avoid the warning: "Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?"
	    this.ngZone.run(() => {
		    router.navigate(['/error']);
	    });
    }
}
