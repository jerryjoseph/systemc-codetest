/**
*	Unit tests for StringUtils class
*/

import { StringUtils } from './stringutils'

describe('utils\\stringutils', () => {
    describe('replaceSpace(value, replacementString)', () => {
        const replacementString = ':';
	
        it('should throw error when the value is not of type "string"', () => {
	        let errorMessage = 'value.replace is not a function';
		
	        expect(function() { StringUtils.replaceSpace(true, replacementString); }).toThrow(new TypeError(errorMessage));
	        expect(function() { StringUtils.replaceSpace(1, replacementString); }).toThrow(new TypeError(errorMessage));
	        expect(function() { StringUtils.replaceSpace({}, replacementString); }).toThrow(new TypeError(errorMessage));
	        expect(function() { StringUtils.replaceSpace([], replacementString); }).toThrow(new TypeError(errorMessage));
        });
	
        it('should return updated value when the replacement string is not of type "string" and the value has spaces', () => {
	        let value = 'Flickr feeds';
		
	        let updatedValue = StringUtils.replaceSpace(value, true);
	        expect(updatedValue).toEqual('Flickrtruefeeds');
		
	        updatedValue = StringUtils.replaceSpace(value, 2);
	        expect(updatedValue).toEqual('Flickr2feeds');
		
	        updatedValue = StringUtils.replaceSpace(value, {});
	        expect(updatedValue).toEqual('Flickr[object Object]feeds');
		
	        updatedValue = StringUtils.replaceSpace(value, { name: 'JJ' });
	        expect(updatedValue).toEqual('Flickr[object Object]feeds');
		
	        updatedValue = StringUtils.replaceSpace(value, []);
	        expect(updatedValue).toEqual('Flickrfeeds');
		
	        updatedValue = StringUtils.replaceSpace(value, [1,2]);
	        expect(updatedValue).toEqual('Flickr1,2feeds');
        });
	
        it('should return same value when the replacement string is not of type "string" and the value doesn\'t have spaces', () => {
	        let value = 'Flickr';
		
	        let updatedValue = StringUtils.replaceSpace(value, true);
	        expect(updatedValue).toEqual(value);
		
	        updatedValue = StringUtils.replaceSpace(value, 2);
	        expect(updatedValue).toEqual(value);
		
	        updatedValue = StringUtils.replaceSpace(value, {});
	        expect(updatedValue).toEqual(value);
		
	        updatedValue = StringUtils.replaceSpace(value, []);
	        expect(updatedValue).toEqual(value);
        });
	
        it('should return same value when the value is undefined/null/empty string', () => {
	        let value = undefined;
	        let updatedValue = StringUtils.replaceSpace(value, replacementString);
	        expect(updatedValue).toEqual(value);
		
	        value = null;
	        updatedValue = StringUtils.replaceSpace(value, replacementString);
	        expect(updatedValue).toEqual(value);
		
	        value = '';
	        updatedValue = StringUtils.replaceSpace(value, replacementString);
	        expect(updatedValue).toEqual(value);
        });
	
        it('should return updated value when the value has spaces between the words', () => {
	        let value = 'Flickr feeds';
	        let updatedValue = StringUtils.replaceSpace(value, replacementString);
	        expect(updatedValue).toEqual('Flickr' + replacementString + 'feeds');
		
	        value = ' ' + value + ' ';
	        updatedValue = StringUtils.replaceSpace(value, replacementString);
	        expect(updatedValue).toEqual(replacementString + 'Flickr' + replacementString + 'feeds' + replacementString);
        });
	
        it('should return updated value when the value has spaces only at start/end/both sides', () => {
	        let value = ' Flickr';
	        let updatedValue = StringUtils.replaceSpace(value, replacementString);
	        expect(updatedValue).toEqual(replacementString + 'Flickr');
		
	        value = 'Flickr ';
	        updatedValue = StringUtils.replaceSpace(value, replacementString);
	        expect(updatedValue).toEqual('Flickr' + replacementString);
		
	        value = ' Flickr ';
	        updatedValue = StringUtils.replaceSpace(value, replacementString);
	        expect(updatedValue).toEqual(replacementString + 'Flickr' + replacementString);
		
	        value = ' ' + value + ' ';
	        updatedValue = StringUtils.replaceSpace(value, replacementString);
	        expect(updatedValue).toEqual(replacementString + replacementString + 'Flickr' + replacementString + replacementString);
        });
    });
  
    describe('isStringNullOrEmpty(value)', () => {
        it('should throw error when the value is not of type "string"', () => {
            let errorMessage = 'value.trim is not a function';
		
	        expect(function() { StringUtils.isStringNullOrEmpty(true); }).toThrow(new TypeError(errorMessage));
	        expect(function() { StringUtils.isStringNullOrEmpty(1); }).toThrow(new TypeError(errorMessage));
	        expect(function() { StringUtils.isStringNullOrEmpty({}); }).toThrow(new TypeError(errorMessage));
	        expect(function() { StringUtils.isStringNullOrEmpty([]); }).toThrow(new TypeError(errorMessage));
        });
	
        it('should return true when the value undefined/null/empty string/string with empty spaces only', () => {
	        let value = undefined;
	        let isValueNullOrEmpty = StringUtils.isStringNullOrEmpty(value);
	        expect(isValueNullOrEmpty).toEqual(true);
		
	        value = null;
	        isValueNullOrEmpty = StringUtils.isStringNullOrEmpty(value);
	        expect(isValueNullOrEmpty).toEqual(true);
		
	        value = '';
	        isValueNullOrEmpty = StringUtils.isStringNullOrEmpty(value);
	        expect(isValueNullOrEmpty).toEqual(true);
		
	        value = ' ';
	        isValueNullOrEmpty = StringUtils.isStringNullOrEmpty(value);
	        expect(isValueNullOrEmpty).toEqual(true);
		
	        value = '      ';
	        isValueNullOrEmpty = StringUtils.isStringNullOrEmpty(value);
	        expect(isValueNullOrEmpty).toEqual(true);
        });
	
        it('should return false when the value is a non empty string ', () => {
	        let value = 'Flickr';
	        let isValueNullOrEmpty = StringUtils.isStringNullOrEmpty(value);
	        expect(isValueNullOrEmpty).toEqual(false);
		
	        value = 'Flickr feeds';
	        isValueNullOrEmpty = StringUtils.isStringNullOrEmpty(value);
	        expect(isValueNullOrEmpty).toEqual(false);
        });
    });
});