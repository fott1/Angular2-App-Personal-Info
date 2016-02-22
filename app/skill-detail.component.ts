import {Component} from 'angular2/core';
import {Skill} from './skill';

@Component({
  selector: 'my-skill-detail',
  template: `
    <div *ngIf="skill">
      <h2>{{skill.name}} details</h2>
      <div>
        <label>Description: </label>{{skill.description}}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="skill.name" placeholder="name"/>
      </div>
    </div>
  `,
  inputs: ['skill']
})
export class SkillDetailComponent {
  skill: Skill;
}