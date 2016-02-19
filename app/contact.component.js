System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ContactComponent = (function () {
                function ContactComponent() {
                    this.mail = 'mailto:karalisfotis@gmail.com';
                    this.website = "http://www.3e.gr";
                    this.linkedin = "http://LinkedIn Url";
                    this.facebook = 'http://Facebook Url';
                    this.twitter = 'http://Twitter Url';
                    this.mobile = '#';
                    this.github = "http://Github Url";
                    this.reasons = ['Technical', 'Personal',
                        'General', 'Hire'];
                    this.submitted = false;
                    this.active = true;
                }
                ContactComponent.prototype.onSubmit = function () { this.submitted = true; };
                ContactComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/contact.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContactComponent);
                return ContactComponent;
            })();
            exports_1("ContactComponent", ContactComponent);
        }
    }
});
//# sourceMappingURL=contact.component.js.map