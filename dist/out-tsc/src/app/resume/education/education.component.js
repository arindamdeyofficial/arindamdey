import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EducationComponent = class EducationComponent {
    constructor() {
        this.educations = [
            {
                name: "B.Tech in Electronics and Communication ( ECE )",
                imagePath: "assets/img/edu/wbut.png",
                insName: "Netaji Subhash Enginerring College under West Bengal University of Technology (WBUT)",
                marks: "7.83 DGPA i.e. 7.33 CGPA/73.3 %",
                span: "July 2006 - July 2010"
            },
            {
                name: "12th H.S. [Higher Secondary]",
                imagePath: "assets/img/edu/jv.png",
                insName: "Jadavpur Vidyapith",
                marks: "72.4%",
                span: "June 2003 –  June 2005"
            },
            {
                name: "10th [Secondary]",
                imagePath: "assets/img/edu/jv.png",
                insName: "Jadavpur Vidyapith",
                marks: "86.75%",
                span: "June 2001 –  June 2003"
            }
        ];
    }
    ngOnInit() {
    }
};
EducationComponent = __decorate([
    Component({
        selector: 'app-education',
        templateUrl: './education.component.html',
        styleUrls: ['./education.component.css']
    })
], EducationComponent);
export { EducationComponent };
//# sourceMappingURL=education.component.js.map