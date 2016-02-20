import {Component} from 'angular2/core';
@Component({
	template:
	`
	<hr>
	<div class="row skills">
		<ul>	
			<li *ngFor="#skill of skills"
			(click)="onSelect(skill)">
			{{skill.name}}</li>
			<i>Never forget the real values of life</i>
		</ul>
	</div>


	`
})
export class SkillsComponent { }
