/**
*	Unit tests for DateFormatter
*/

import { DateFormatter } from './dateformatter.pipe'

describe('pipes\\dateformatter', () => {
    let pipe: DateFormatter;
  
    const dateTimeUtcString = '2018-10-10T07:53:47+05:30';
    const dateFormat = 'dd MMM yyyy';
    const dateTimeFormat = 'dd MMM yyyy HH:mm';
  
    const expectedDay = '10';
    const expectedDaySuffix = 'th';
    const expectedDate = expectedDay + ' Oct 2018';
    const expectedDateWithDaySuffix = expectedDay + expectedDaySuffix + ' Oct 2018';
    const expectedTime = '07:53';
    const expectedDateTime = expectedDate + ' ' + expectedTime;
    const expectedDateTimeWithDaySuffix = expectedDateWithDaySuffix + ' ' + expectedTime;

    beforeEach(() => {
        pipe = new DateFormatter('en-US');
    });
  
    it('should return null when the value provided is null', () => {
        expect(pipe.transform(null, dateFormat, false)).toBe(null);
    });
  
    it('should return empty string when the value provided is an empty string', () => {
        expect(pipe.transform('', dateFormat, false)).toBe('');
    });
  
    it('should return the date in "' + dateFormat + '" format', () => {
        expect(pipe.transform(dateTimeUtcString, dateFormat, false)).toBe(expectedDate);
    });
  
    it('should return the date in "' + dateTimeFormat + '" format', () => {
        expect(pipe.transform(dateTimeUtcString, dateTimeFormat, false)).toBe(expectedDateTime);
    });
  
    it('should return the date in "' + dateFormat + '" format with day suffix', () => {
        expect(pipe.transform(dateTimeUtcString, dateFormat, true)).toBe(expectedDateWithDaySuffix);
    });
  
    it('should return the date in "' + dateTimeFormat + '" format with day suffix', () => {
        expect(pipe.transform(dateTimeUtcString, dateTimeFormat, true)).toBe(expectedDateTimeWithDaySuffix);
    });
});
