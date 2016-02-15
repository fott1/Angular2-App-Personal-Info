import {Component} from 'angular2/core';
import {ContactInfo} from './contactinfo';


@Component({
    selector: 'my-app',
	templateUrl: 'app/app.component.html'

})
export class AppComponent { 

	title = 'Angular App';
	name = "Fotis";
	lastName = "Karalis";
	myTitle = 'Web Developer';
	information = [

		new ContactInfo('HTML5 = Regards DOM'),
		new ContactInfo('CSS3 = Regards DOM styling')
	];
	myInfo = this.information[0];

  addInfo(newInfo:string) {
	  if (newInfo) {
		   this.information.push(new ContactInfo(newInfo));
	  }
  }

}
