/**
*	NgModule: AppRoutingModule
*	Configures different url routes for the application.
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppErrorComponent, PublicPhotosComponent } from '../components';

const routes: Routes = [
    { path: '', redirectTo: '/publicphotos', pathMatch: 'full' },
    { path: 'error', component: AppErrorComponent },
    { path: 'publicphotos', component: PublicPhotosComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {
    static getRoutes() {
	    return routes;
    }
}
