import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {ProfileInfo} from './contactinfo';



@Component({
  selector: 'main-form',
  templateUrl: 'app/mainform.component.html'
})
export class MainFormComponent {

 reasons = ['Technical', 'Personal',
            'General', 'Hire'];

 


   submitted = false;
  onSubmit() { this.submitted = true; }
  active = true;




}
