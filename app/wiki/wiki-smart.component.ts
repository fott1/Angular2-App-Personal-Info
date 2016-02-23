import {Component}        from 'angular2/core';
import {JSONP_PROVIDERS}  from 'angular2/http';
import {Observable}       from 'rxjs/Observable';
import {Subject}          from 'rxjs/Subject';

import {WikipediaService} from './wikipedia.service';

@Component({
  selector: 'my-wiki-smart',
  template: `
    <div class="container top-padding-medium wikipedia">
      <div class="row">
        <div class=" col-xs-12 col-md-6 col-md-6 col-lg-6">
          <h1>Search Wikipedia and Navigate to the Results</h1>
          <p><i>The search engine fetches when typing stops. Results open in new browser tab.</i></p>
          <input #term (keyup)="search(term.value)" autofocus/>
          <ul>
            <li *ngFor="#item of items | async"><a href="https://en.wikipedia.org/wiki/{{item}}" target="_blank">{{item}}</a></li>
          </ul>
        </div>
      </div>
    </div>
  `,
  providers:[JSONP_PROVIDERS, WikipediaService]
})
export class WikiSmartComponent {

  constructor (private _wikipediaService: WikipediaService) { }

  private _searchTermStream = new Subject<string>();

  search(term:string) { this._searchTermStream.next(term); }

  items:Observable<string[]> = this._searchTermStream
    .debounceTime(300)
    .distinctUntilChanged()
    .switchMap((term:string) => this._wikipediaService.search(term));
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/