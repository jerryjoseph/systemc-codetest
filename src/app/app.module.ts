/**
*	NgModule: AppModule
*	The root module to bootstrap application components, services, other feature modules, etc. and helps to launch the application
*/

import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DateFormatter } from './pipes';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppErrorHandlerService } from './services';
import { AppComponent, AppErrorComponent, PublicPhotosComponent } from './components';

@NgModule({
    declarations: [
        DateFormatter,
        AppComponent,
        AppErrorComponent,
        PublicPhotosComponent
    ],
  
    imports: [
        HttpClientModule,
        HttpClientJsonpModule,
        BrowserModule,
        InfiniteScrollModule,
        AppRoutingModule
    ],
  
    providers: [
        AppErrorHandlerService,
        { provide: ErrorHandler, useClass: AppErrorHandlerService }
    ],
  
    bootstrap: [AppComponent]
})

export class AppModule { }
