System.register(['angular2/core', 'angular2/http', 'rxjs/Subject', './wikipedia.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Subject_1, wikipedia_service_1;
    var WikiSmartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (wikipedia_service_1_1) {
                wikipedia_service_1 = wikipedia_service_1_1;
            }],
        execute: function() {
            WikiSmartComponent = (function () {
                function WikiSmartComponent(_wikipediaService) {
                    var _this = this;
                    this._wikipediaService = _wikipediaService;
                    this._searchTermStream = new Subject_1.Subject();
                    this.items = this._searchTermStream
                        .debounceTime(300)
                        .distinctUntilChanged()
                        .switchMap(function (term) { return _this._wikipediaService.search(term); });
                }
                WikiSmartComponent.prototype.search = function (term) { this._searchTermStream.next(term); };
                WikiSmartComponent = __decorate([
                    core_1.Component({
                        selector: 'my-wiki-smart',
                        template: "\n    <div class=\"container top-padding-medium wikipedia\">\n      <div class=\"row\">\n        <div class=\" col-xs-12 col-md-6 col-md-6 col-lg-6\">\n          <h1>Search Wikipedia and Navigate to the Results</h1>\n          <p><i>The search engine fetches when typing stops. Results open in new browser tab.</i></p>\n          <input #term (keyup)=\"search(term.value)\" autofocus/>\n          <ul>\n            <li *ngFor=\"#item of items | async\"><a href=\"https://en.wikipedia.org/wiki/{{item}}\" target=\"_blank\">{{item}}</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  ",
                        providers: [http_1.JSONP_PROVIDERS, wikipedia_service_1.WikipediaService]
                    }), 
                    __metadata('design:paramtypes', [wikipedia_service_1.WikipediaService])
                ], WikiSmartComponent);
                return WikiSmartComponent;
            })();
            exports_1("WikiSmartComponent", WikiSmartComponent);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=wiki-smart.component.js.map