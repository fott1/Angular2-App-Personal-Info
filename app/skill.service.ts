import {Skill} from './skill';
import {SKILLS} from './mock-skills';
import {Injectable} from 'angular2/core';

@Injectable()
export class SkillService {
  getSkills() {
    return Promise.resolve(SKILLS);
  }
  // See the "Take it slow" appendix
  getSkillsSlowly() {
    return new Promise<Skill[]>(resolve =>
      setTimeout(()=>resolve(SKILLS), 2000) // 2 seconds
    );
  }
}