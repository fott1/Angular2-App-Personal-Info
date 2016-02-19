System.register(['angular2/core', 'angular2/router', './skills.component', './about.component', './contact.component', './portfolio.component', './mainform.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, skills_component_1, about_component_1, contact_component_1, portfolio_component_1, mainform_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (skills_component_1_1) {
                skills_component_1 = skills_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (portfolio_component_1_1) {
                portfolio_component_1 = portfolio_component_1_1;
            },
            function (mainform_component_1_1) {
                mainform_component_1 = mainform_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Professional Profile';
                    this.name = "Fotis";
                    this.lastName = "Karalis";
                    this.proffession = 'Web Developer';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t<div class=\"container\">\n\t<h1>{{title}}</h1>\n\t<h4>{{name}} {{lastName}}</h4>\n\t<h5>{{proffession}}</h5>\n    <nav>\n      <a [routerLink]=\"['AboutComponent']\">About</a>\n      <a [routerLink]=\"['SkillsComponent']\">Skills</a>\n      <a [routerLink]=\"['PortfolioComponent']\">Work</a>\n\t  <a [routerLink]=\"['ContactComponent']\">Contact</a>\n\t</nav>\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<i>Navigate to the above links and check my info</i>\n\t\t</div>\n\t</div>\n   \t<router-outlet></router-outlet>\n\t<main-form></main-form>\n\t</div>\n   ",
                        directives: [router_1.ROUTER_DIRECTIVES, mainform_component_1.MainFormComponent]
                    }),
                    router_1.RouteConfig([
                        { path: '/skills', name: 'SkillsComponent', component: skills_component_1.SkillsComponent },
                        { path: '/about', name: 'AboutComponent', component: about_component_1.AboutComponent },
                        { path: '/portfolio', name: 'PortfolioComponent', component: portfolio_component_1.PortfolioComponent },
                        { path: '/contact', name: 'ContactComponent', component: contact_component_1.ContactComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map