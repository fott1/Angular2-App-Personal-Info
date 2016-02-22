import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ProfileInfo} from './contactinfo';
import {SkillsComponent} from './skills.component';
import {AboutComponent} from './about.component';
import {ContactComponent} from './contact.component';
import {PortfolioComponent} from './portfolio.component';

import {HomeComponent} from './home.component';

@Component({
    selector: 'my-app',
	templateUrl: 'app/app.component.html',
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path:'/skills', name: 'SkillsComponent', component: SkillsComponent},
	{path: '/about', name: 'AboutComponent', component: AboutComponent},
	{ path: '/portfolio', name: 'PortfolioComponent', component: PortfolioComponent },
	{ path: '/contact', name: 'ContactComponent', component: ContactComponent },
	{ path: '/', name: 'HomeComponent', component: HomeComponent, useAsDefault: true}

])

export class AppComponent {

	status = 'Hey, this is me!';
	name = "Fotis";
	lastName = "Karalis";
	proffession = 'Web Developer';
	area = 'Thessaloniki, Greece';
	
}
