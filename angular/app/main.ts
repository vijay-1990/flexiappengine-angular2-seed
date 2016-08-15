import { enableProdMode } from '@angular/core';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app.component';


import { APP_ROUTER_PROVIDERS } from './app.routes';
import {provide} from '@angular/core';
import { LocationStrategy,
         HashLocationStrategy } from '@angular/common';

//this is to enable prod mode
enableProdMode();
bootstrap(AppComponent, [
	APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
    //,Logger
]);