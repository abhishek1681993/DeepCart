import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dc-card-galary',
    templateUrl: './card-galary.component.html',
    styleUrls: ['./card-galary.component.css']
})
export class CardGalaryComponent implements OnInit {

    imageList = [{index: 1}, {index: 2}, {index: 3}, {index: 4}, {index: 5}, {index: 6}, {index: 7}, {index: 8}]
    constructor() { }

    ngOnInit(): void { }

    // showImageDetails():void {

    // }
}
