import {Component} from 'angular2/core';
@Component({
	template:
	`
	<div class="row skills top-padding-medium">
		<ul>	
			<li *ngFor="#skill of skills">
			{{skill}}</li>
			<i>Never forget the real values of life</i>
		</ul>
	</div>


	`
})
export class SkillsComponent { 


skills = ['Coding','Travelling','Loving','Helping','Enjoying']

}
