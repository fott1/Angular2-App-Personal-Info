import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ProfileInfo} from './contactinfo';
import {SkillsComponent} from './skills.component';
import {AboutComponent} from './about.component';
import {ContactComponent} from './contact.component';
import {PortfolioComponent} from './portfolio.component';

import {HomeComponent} from './home.component';

import {HTTP_PROVIDERS}    from 'angular2/http';

import {provide}           from 'angular2/core';
import {XHRBackend}        from 'angular2/http';

import {WikipediaService} from './wikipedia.service';
import {WikiSmartComponent} from './wiki/wiki-smart.component';

// in-memory web api imports
import {InMemoryBackendService,
        SEED_DATA}         from 'a2-in-memory-web-api/core';

	@Component({
    selector: 'my-app',
	templateUrl: 'app/app.component.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [HTTP_PROVIDERS]
})
@RouteConfig([
	{ path: '/skills', name: 'SkillsComponent', component: SkillsComponent },
	{ path: '/about', name: 'AboutComponent', component: AboutComponent },
	{ path: '/portfolio', name: 'PortfolioComponent', component: PortfolioComponent },
	{ path: '/contact', name: 'ContactComponent', component: ContactComponent },
	{ path: '/wikipedia', name: 'WikiSmartComponent', component: WikiSmartComponent },

	{ path: '/', name: 'HomeComponent', component: HomeComponent, useAsDefault: true }

])

export class AppComponent {

	status = 'Hey, this is me!';
	name = "Fotis";
	lastName = "Karalis";
	proffession = 'Web Developer';
	area = 'Thessaloniki, Greece';

}