/**
*	Class: StringUtils
*	Provides string utlility functions.
*/

export class StringUtils {
    static stringType = 'string';
	
	/**
	*	@desc Returns the value after replacing all the spaces present in the value with the replacement string.
	*	@param {string} value: String that needs replacement
	*	@param {string} replacementString: String to replace
	*	@returns {string}
	*/
    static replaceSpace(value, replacementString) {
	    if (value && replacementString) {
		    return value.replace(/\s/g, replacementString);
	    }
	    return value;
    }
	
	/**
	*	@desc Checks whether a string is undefined/null/empty string/string with only whitespaces.
	*	@param {string} value: String to check the nullness
	*	@returns {boolean}
	*/
    static isStringNullOrEmpty(value) {
	    return value === undefined || value === null || (!(value instanceof Array) && value.length === 0) || value.trim().length === 0;
    }
}
