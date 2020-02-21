import { Directive, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el: ElementRef) { }

  // set inputName to selector name to be able to access single input directives cleaner: selectorname [inputName] = ... -> [selectorName] = "'input'"
  @Input('appInputFormat') format : string

  @HostListener('focus') onFocus() {
    console.log("on focus")
  }

  @HostListener('blur') onBlur() {
    let inputValue : string = this.el.nativeElement.value

    this.el.nativeElement.value = this.format == 'lowercase' ? inputValue.toLowerCase() : inputValue.toUpperCase()

    this.el.nativeElement.value = inputValue.toLowerCase()
    console.log("on blur")
  }




}
