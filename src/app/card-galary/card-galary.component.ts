import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dc-card-galary',
    templateUrl: './card-galary.component.html',
    styleUrls: ['./card-galary.component.css']
})
export class CardGalaryComponent implements OnInit {

    imageList = [{index: 1, price: 200}, {index: 2, price: 200}, {index: 3, price: 200}, {index: 4, price: 200}, {index: 5, price: 200}, {index: 6, price: 200}, {index: 7, price: 200}, {index: 8, price: 200}]
    constructor() { }

    ngOnInit(): void { }

    // showImageDetails():void {

    // }
}
