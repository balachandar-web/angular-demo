// import { Directive } from '@angular/core';
import { Directive,HostListener,ElementRef} from '@angular/core';


@Directive({
  selector: '[appCustomGrid]',
  standalone: true
})
export class CustomGridDirective {

    constructor( el : ElementRef) { 

    // @HostListener('input', ['$event']) onInputChange(event: Event) {
    //   const input = this.el.nativeElement;
    //   input.value = input.value.toLowerCase();
    el.nativeElement.style.color("red");
  }
}
