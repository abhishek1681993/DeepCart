import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { first } from 'rxjs/operators';

// import { AlertService, AuthenticationService } from '../_services';

@Component(
    {
        selector: 'in-details',
        templateUrl: './details.component.html'
    }
)
export class DetailsComponent {
    loginForm: FormGroup;

    imageList = [];
    selectedImage;

    selectedImageUrl = 'assets/img/t-shirts/1.jpg';
    isUpdated = true;

    detilsInfo = {

    }

    _size = [];
    options: FormGroup;

    constructor(fb: FormBuilder) {
        this.options = fb.group({
            color: 'primary',
            fontSize: [0, Validators.min(0)],
        });

        this.initMemberVariable();
    }

    viewSelectedIndex(item: any): void {
        this.isUpdated = false;
        setTimeout(() => {
            this.selectedImage = item;
            this.selectedImageUrl = `assets/img/t-shirts/${item.index}.jpg`;
            this.isUpdated = true;
        }, 100)
    }

    private initMemberVariable(): void {
        this.detilsInfo = {
            name: 'BLACK PYRAMID BURNING PYRAMID DAD HAT',
            price: '$28.0',
            modelNumber: 'Y7160272',
            color: 'White',
            size: 'XXXL'
        }

        this._size = [
            {
                label: 'SM',
                value: 'SM'
            },
            {
                label: 'MD',
                value: 'MD'
            },
            {
                label: 'L',
                value: 'L'
            },
            {
                label: 'XL',
                value: 'XL'
            },
            {
                label: 'XXL',
                value: 'XXL'
            }
        ];
        this.imageList = [{index: 1}, {index: 2}, {index: 3}, {index: 4}, {index: 5}, {index: 6}, {index: 7}, {index: 8}];
        this.selectedImage = this.imageList[0];
    }

}