import { Directive, HostListener, Injectable, Input } from '@angular/core';
import { Route } from '@angular/router';


@Directive({
  selector: '[appLink]'
})

  @Injectable({ providedIn: 'root' })
export class LinkDirective {
  @Input() linkValue: string;

  constructor() { }

  @HostListener('click', ['$event.target'])
  onClick(param: any) {
    alert("click item");
  }

   @HostListener('mouseover', ['$event'])
     mouseover(event) {
     alert('hover to editor div');
     }

  //navigate() {
  //  alert(this.linkValue);
  //}
}
