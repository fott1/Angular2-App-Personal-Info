import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ProfileInfo} from './contactinfo';
import {SkillsComponent} from './skills.component';
import {AboutComponent} from './about.component';
import {ContactComponent} from './contact.component';
import {PortfolioComponent} from './portfolio.component';

import {HomeComponent} from './home.component'



@Component({
    selector: 'my-app',
	template: `
	<div class="container">
	<div class="row">
	<div class="col-lg-2">
	<a href="/home"><img src="https://scontent-cdg2-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/11021079_10152741879445060_6520664397103248383_n.jpg?oh=5a211d5b27b61a70941d02543cad60a0&oe=576EEDE0"></a>
	</div>
	<div class="col-lg-10">
	<a href="/home"><h1>{{name}} {{lastName}}</h1></a>
	<h4>{{status}}</h4>
	<h5>{{proffession}}</h5>
	<h5>{{area}}</h5>
	</div>
	</div>
	</div>
	<div class="container">
    <nav>
      <a [routerLink]="['HomeComponent']">Home</a>
      <a [routerLink]="['AboutComponent']">About</a>
      <a [routerLink]="['SkillsComponent']">Skills</a>
      <a [routerLink]="['PortfolioComponent']">Work</a>
	  <a [routerLink]="['ContactComponent']">Contact</a>
	</nav>
   	<router-outlet></router-outlet>
	</div>
   `,
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path:'/skills', name: 'SkillsComponent', component: SkillsComponent},
	{path: '/about', name: 'AboutComponent', component: AboutComponent},
	{ path: '/portfolio', name: 'PortfolioComponent', component: PortfolioComponent },
	{ path: '/contact', name: 'ContactComponent', component: ContactComponent },
	{ path: '/', name: 'HomeComponent', component: HomeComponent}

])

export class AppComponent {

	status = 'Hey, this is me!';
	name = "Fotis";
	lastName = "Karalis";
	proffession = 'Web Developer';
	area = 'Thessaloniki, Greece';
	
}
