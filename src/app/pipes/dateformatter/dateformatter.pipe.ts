/**
*	Pipe: DateFormatter
*	Transforms a date string to fomatted date string by using the date format and other inputs provided.
*/

import { Pipe, PipeTransform, LOCALE_ID, Inject } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({
  name: 'dateFormatter'
})
export class DateFormatter implements PipeTransform {
	constructor(@Inject(LOCALE_ID) protected localeId: string) { }

    transform(dateString: string, format: string, needDaySuffix: boolean): string {
		if(!dateString) {
			return dateString;
		}
		
		let dateVal = new Date(dateString);
		
		// Use angular's 'formatDate' functionality to get the formatted date
		let formattedDate = formatDate(dateString, format, this.localeId);
		
		// Add day suffix to formattedDate if required
		if (needDaySuffix === true) {
			let indexOfDay = format.indexOf('dd'),
				indexOfDayEnd = -1;
			if (indexOfDay === -1) {
				indexOfDay = format.indexOf('d');
				if (indexOfDay >= 0) {
					indexOfDayEnd = indexOfDay + 1;
				}
			}
			else {
				indexOfDayEnd = indexOfDay + 2;
			}

			if (indexOfDayEnd >= 0) {
				let suffix = 'th',
					day = dateVal.getDate();

				if (day === 1 || day === 21 || day === 31) {
					suffix = 'st'
				} else if (day === 2 || day === 22) {
					suffix = 'nd';
				} else if (day === 3 || day === 23) {
				   suffix = 'rd';
				}
				
				formattedDate = [formattedDate.slice(0, indexOfDayEnd), suffix, formattedDate.slice(indexOfDayEnd)].join('');
			}
		}

		return formattedDate;
    }
}
