import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[customLabel]'
})
export class CustomSharedDirective implements OnInit{

  private htmlElement?: ElementRef<HTMLElement>;

  constructor(private el: ElementRef<HTMLElement>) {
    console.log('directiva');
    this.htmlElement = el;
   }
  ngOnInit(): void {
    console.log('ngoinit');
  }

}
