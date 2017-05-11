"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var course_1 = require('./course');
var CourseFormComponent = (function () {
    function CourseFormComponent() {
        this.abc = new course_1.Course(1, 'Angular2', '4 days');
        this.submitted = false;
    }
    CourseFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    CourseFormComponent.prototype.newCourse = function () {
        this.abc = new course_1.Course(0, '', '');
    };
    CourseFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'course-form',
            templateUrl: 'course-form.component.html',
            styleUrls: ['forms.css']
        }), 
        __metadata('design:paramtypes', [])
    ], CourseFormComponent);
    return CourseFormComponent;
}());
exports.CourseFormComponent = CourseFormComponent;
//# sourceMappingURL=course-form.component.js.map