/**
*	Component: AppErrorComponent
*	Responsible for rendering a view by managing its data, template and styles.
*/

import { Component } from '@angular/core';

@Component({
    template: '<h2>Unexpected error occurred.</h2><h5>Please check the browser console for more details.</h5>'
})
export class AppErrorComponent { }
