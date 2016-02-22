import {Component} from 'angular2/core';
@Component({
	template:
	`
	<div class="row skills top-padding-medium">
		<ul>	
			<li *ngFor="#skill of skills" [class.selected]="skill === selectedSkill" (click)="onSelect(skill)">
			{{skill}}</li>
			<i>Never forget the real values of life</i>
		</ul>
	</div>
	<div class="container-fluid">
		<div class="row text-center">
			<div class="col-xs-4 col-md-4 col-md-4 col-lg-4">
			<img src="./images/front.png">
			</div>
			<div class="col-xs-8 col-md-8 col-md-8 col-lg-8">
			<img src="./images/angular.jpg">
			</div>
		</div>
	</div>


	`
})
export class SkillsComponent { 


skills = ['Coding','Travelling','Loving','Helping','Enjoying']

}
