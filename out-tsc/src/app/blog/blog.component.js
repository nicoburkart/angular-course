import { __decorate } from "tslib";
import { Component } from '@angular/core';
let BlogComponent = class BlogComponent {
    constructor() {
        this.isSelected = false;
        this.email = "me@web.de";
        this.text = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
    }
    onClick($event) {
        /*stops eventbubbleling (last element to root element in dom tree will be called with event)
        div and button are both listening to the event, but we don't want both to execute
        */
        //event.stopPropagation()
        this.isSelected = !this.isSelected;
    }
    onDivClick() {
        console.log("I'm a div and someone clicked on me");
    }
    /** should only be called when enter has been pressed. */
    onKeyUp() {
        console.log("Enter was pressed and the email is: " + this.email);
    }
    ngOnInit() {
    }
};
BlogComponent = __decorate([
    Component({
        selector: 'blog',
        templateUrl: './blog.component.html',
        styleUrls: ['./blog.component.css']
    })
], BlogComponent);
export { BlogComponent };
//# sourceMappingURL=blog.component.js.map