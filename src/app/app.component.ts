import { Component, OnInit } from '@angular/core';
// import * as jQuery from 'jquery';
// window['jQuery'] = jQuery;

@Component({
  selector: 'my-app',
  // template: `<router-outlet></router-outlet>`,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  // constructor(private)
  ngOnInit(): void {
    console.log('dsjkf')
    if(localStorage.getItem('user')) {

    }
  }
}
