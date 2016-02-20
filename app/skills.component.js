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
    var SkillsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SkillsComponent = (function () {
                function SkillsComponent() {
                    this.skills = ['Coding', 'Travelling', 'Loving', 'Helping', 'Enjoying'];
                }
                SkillsComponent = __decorate([
                    core_1.Component({
                        template: "\n\t<div class=\"row skills top-padding-medium\">\n\t\t<ul>\t\n\t\t\t<li *ngFor=\"#skill of skills\">\n\t\t\t{{skill}}</li>\n\t\t\t<i>Never forget the real values of life</i>\n\t\t</ul>\n\t</div>\n\n\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SkillsComponent);
                return SkillsComponent;
            })();
            exports_1("SkillsComponent", SkillsComponent);
        }
    }
});
//# sourceMappingURL=skills.component.js.map