import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ProfileInfo} from './contactinfo';
import {SkillsComponent} from './skills.component';
import {AboutComponent} from './about.component';
import {ContactComponent} from './contact.component';
import {PortfolioComponent} from './portfolio.component';

import {MainFormComponent} from './mainform.component'


@Component({
    selector: 'my-app',
	template: `
	<div class="container">
	<h1>{{title}}</h1>
	<h4>{{name}} {{lastName}}</h4>
	<h5>{{proffession}}</h5>
    <nav>
      <a [routerLink]="['AboutComponent']">About</a>
      <a [routerLink]="['SkillsComponent']">Skills</a>
      <a [routerLink]="['PortfolioComponent']">Work</a>
	  <a [routerLink]="['ContactComponent']">Contact</a>
	</nav>
	<div class="container">
		<div class="row">
			<p class="hint">Navigate to the above links and check my info</p>
		</div>
	</div>
   	<router-outlet></router-outlet>
	<main-form></main-form>
	</div>
   `,
	directives: [ROUTER_DIRECTIVES, MainFormComponent]
})
@RouteConfig([
	{path:'/skills', name: 'SkillsComponent', component: SkillsComponent},
	{path: '/about', name: 'AboutComponent', component: AboutComponent},
	{ path: '/portfolio', name: 'PortfolioComponent', component: PortfolioComponent },
	{ path: '/contact', name: 'ContactComponent', component: ContactComponent }

])

export class AppComponent {

	title = 'Professional Profile';
	name = "Fotis";
	lastName = "Karalis";
	proffession = 'Web Developer';
	
}
