import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'in-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
        // console.log(document.scrollingElement.scrollTop = 300)
     }

     isScrolled(): string {
         return (document.scrollingElement.scrollTop > 10) ? 'fixed-top': '';
     }
}
