import {Component} from 'angular2/core';
@Component({
	 templateUrl: 'app/contact.component.html'
	
})
export class ContactComponent { 
	mail = 'mailto:karalisfotis@gmail.com';
	website = "http://www.3e.gr";
	linkedin = "http://LinkedIn Url";
	facebook = 'http://Facebook Url';
	twitter = 'http://Twitter Url';
	mobile = '#';
	github = "http://Github Url";

 reasons = ['Technical', 'Personal',
            'General', 'Hire'];

  submitted = false;
  onSubmit() { this.submitted = true; }
  active = true;
}