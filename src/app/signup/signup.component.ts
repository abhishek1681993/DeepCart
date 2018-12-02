import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { first } from 'rxjs/operators';

// import { AlertService, AuthenticationService } from '../_services';

@Component(
    {
        selector: 'in-signup',
        templateUrl: './signup.component.html'
    }
)
export class SignupComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        // private route: ActivatedRoute,
        private router: Router//,
        // private authenticationService: AuthenticationService,
        // private alertService: AlertService
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            emailAddress: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        // console.log(this.f.firstName)
        this.router.navigate(['login']);
    }
}