import { __decorate } from "tslib";
import { Directive, HostListener, Input } from '@angular/core';
let InputFormatDirective = class InputFormatDirective {
    constructor(el) {
        this.el = el;
    }
    onFocus() {
        console.log("on focus");
    }
    onBlur() {
        let inputValue = this.el.nativeElement.value;
        this.el.nativeElement.value = this.format == 'lowercase' ? inputValue.toLowerCase() : inputValue.toUpperCase();
        this.el.nativeElement.value = inputValue.toLowerCase();
        console.log("on blur");
    }
};
__decorate([
    Input('appInputFormat')
], InputFormatDirective.prototype, "format", void 0);
__decorate([
    HostListener('focus')
], InputFormatDirective.prototype, "onFocus", null);
__decorate([
    HostListener('blur')
], InputFormatDirective.prototype, "onBlur", null);
InputFormatDirective = __decorate([
    Directive({
        selector: '[appInputFormat]'
    })
], InputFormatDirective);
export { InputFormatDirective };
//# sourceMappingURL=input-format.directive.js.map