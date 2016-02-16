import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ProfileInfo} from './contactinfo';
import {SkillsComponent} from './skills.component';
import {AboutComponent} from './about.component';
import {ContactComponent} from './contact.component';
import {PortfolioComponent} from './portfolio.component';


@Component({
    selector: 'my-app',
	template: `
	<h1>{{title}}</h1>
	<h4>{{name}} {{lastName}}</h4>
	<h5>{{proffession}}</h5>
    <nav>
      <a [routerLink]="['SkillsComponent']">Skills</a>
      <a [routerLink]="['AboutComponent']">About</a>
      <a [routerLink]="['PortfolioComponent']">Work</a>
	  <a [routerLink]="['ContactComponent']">Contact</a>
	</nav>
   <router-outlet></router-outlet>
   `,
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path:'/skills', name: 'SkillsComponent', component: SkillsComponent},
	{path: '/about', name: 'AboutComponent', component: AboutComponent},
	{ path: '/portfolio', name: 'PortfolioComponent', component: PortfolioComponent }
	{ path: '/contact', name: 'ContactComponent', component: ContactComponent }

])

export class AppComponent {

	title = 'Professional Profile';
	name = "Fotis";
	lastName = "Karalis";
	proffession = 'Web Developer';
	
}
