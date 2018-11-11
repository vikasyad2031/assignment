import { Directive, HostListener, OnInit } from '@angular/core';

@Directive({
  	selector: '[appTotalInt]'
})
export class TotalIntDirective implements OnInit{
	myVar;

  	constructor() { }

  	ngOnInit() {
  		this.myVar = "hello";
  	}

}
