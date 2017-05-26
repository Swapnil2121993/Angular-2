"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var courseFilterPipe = (function () {
    function courseFilterPipe() {
    }
    courseFilterPipe.prototype.transform = function (value, string) {
        if (value === void 0) { value = filterBy; }
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter(function (courses) {
            return courses.Name.toLocaleLowerCase().indexOf(filterBy) !== -1;
        }) : value;
    };
    return courseFilterPipe;
}());
courseFilterPipe = __decorate([
    core_1.Pipe({
        name: 'courseFilter',
    })
], courseFilterPipe);
exports.courseFilterPipe = courseFilterPipe;
//# sourceMappingURL=course-filter.pipe.js.map