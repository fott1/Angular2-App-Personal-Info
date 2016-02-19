System.register(['angular2/core', 'angular2/router', './skills.component', './about.component', './contact.component', './portfolio.component', './home.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, skills_component_1, about_component_1, contact_component_1, portfolio_component_1, home_component_1;
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
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.status = 'Hey, this is me!';
                    this.name = "Fotis";
                    this.lastName = "Karalis";
                    this.proffession = 'Web Developer';
                    this.area = 'Thessaloniki, Greece';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t<div class=\"container\">\n\t<div class=\"row\">\n\t<div class=\"col-lg-2\">\n\t<a href=\"/home\"><img src=\"https://scontent-cdg2-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/11021079_10152741879445060_6520664397103248383_n.jpg?oh=5a211d5b27b61a70941d02543cad60a0&oe=576EEDE0\"></a>\n\t</div>\n\t<div class=\"col-lg-10\">\n\t<a href=\"/home\"><h1>{{name}} {{lastName}}</h1></a>\n\t<h4>{{status}}</h4>\n\t<h5>{{proffession}}</h5>\n\t<h5>{{area}}</h5>\n\t</div>\n\t</div>\n\t</div>\n\t<div class=\"container\">\n    <nav>\n      <a [routerLink]=\"['HomeComponent']\">Home</a>\n      <a [routerLink]=\"['AboutComponent']\">About</a>\n      <a [routerLink]=\"['SkillsComponent']\">Skills</a>\n      <a [routerLink]=\"['PortfolioComponent']\">Work</a>\n\t  <a [routerLink]=\"['ContactComponent']\">Contact</a>\n\t</nav>\n   \t<router-outlet></router-outlet>\n\t</div>\n   ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/skills', name: 'SkillsComponent', component: skills_component_1.SkillsComponent },
                        { path: '/about', name: 'AboutComponent', component: about_component_1.AboutComponent },
                        { path: '/portfolio', name: 'PortfolioComponent', component: portfolio_component_1.PortfolioComponent },
                        { path: '/contact', name: 'ContactComponent', component: contact_component_1.ContactComponent },
                        { path: '/', name: 'HomeComponent', component: home_component_1.HomeComponent }
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