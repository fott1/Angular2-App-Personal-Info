import {bootstrap}        from 'angular2/platform/browser';

// Add all operators to Observable
import 'rxjs/Rx';

import {AppComponent}     from './app.component';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {WikiSmartComponent} from './wiki/wiki-smart.component';

bootstrap(AppComponent, [
	ROUTER_PROVIDERS
]);
