/**
*	Service: AppLoggerService
*	A middleware for logging messages/warnings/errors.
*/

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppLoggerService {
    /**
	*	@desc Logs the message.
	*	@param {any} message: Message to log
	*	@returns {void}
	*/
	log(message: any) {
		console.log(message);
    }
	
	/**
	*	@desc Logs the error.
	*	@param {any} error: Error object to log
	*	@returns {void}
	*/
	logError(error: any) {
		console.error('An error occurred:', error.message);
	}
	
	/**
	*	@desc Logs the http error response.
	*	@param {any} error: Error object to log
	*	@returns {void}
	*/
	logHttpErrorResponse(error: any) {
		console.error('Http failure response for', error.url, ':', error.statusText, '( Status Code:', error.status, ')');
	}
}
