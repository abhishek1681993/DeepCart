import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { WebStorageModule } from 'ngx-store';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CardCatagoryComponent } from './home/catarory/cards-gallery/cards-gallery.component';
// import { StoreService } from './services/store.service';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, BsDropdownModule.forRoot(), RouterModule.forRoot(
    [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: SignupComponent },
      { path: 'home', component: HomeComponent }
    ]
  )
  ],
  declarations: [AppComponent, HomeComponent, LoginComponent, SignupComponent, CardCatagoryComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
