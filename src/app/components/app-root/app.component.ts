/**
*	Component: AppComponent
*	Bootstrap component of the application. Responsible for rendering a view by managing its data, template and styles.
*/

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    title = 'Flickr feeds';
}
