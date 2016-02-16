import {Component} from 'angular2/core';
@Component({
	template:
	`
		<h1>contact</h1>
		<ul>
			<li><a href="{{mail}}">Mail me</a></li>
			<li><a href="{{website}}">Website</a></li>
			<li><a href="{{linkedin}}">LinkedIn</a></li>
			<li><a href="{{facebook}}">Facebook</a></li>
			<li><a href="{{twitter}}">Twitter</a></li>
			<li><a href="{{mobile}}">Call me</a></li>
			<li><a href="{{github}}">Github</a></li>
		</ul>
	`
})
export class ContactComponent { 
	mail = 'mailto:karalisfotis@gmail.com';
	website = "http://www.3e.gr";
	linkedin = "http://LinkedIn Url";
	facebook = 'http://Facebook Url';
	twitter = 'http://Twitter Url';
	mobile = '#';
	github = "http://Github Url";
}