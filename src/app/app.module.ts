import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatNativeDateModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { NgxImageZoomModule } from 'ngx-image-zoom';

// import {MatSidenavModule, MatIconModule,MatToolbarModule,
//   MatInputModule, MatNav} from '@angular/material';

// import { WebStorageModule } from 'ngx-store';

// -----------Component-------------
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardCatagoryComponent } from './home/catarory/cards-gallery/cards-gallery.component';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CardGalaryComponent } from './card-galary/card-galary.component';
import { DetailsComponent } from "./details/details.component"
import { NavItemComponent } from './nav-item/nav-item.component';
// import { StoreService } from './services/store.service';

@NgModule({
  imports: [BrowserModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    FormsModule, 
    ReactiveFormsModule,
    MaterialModule,
    BsDropdownModule.forRoot(),
    NgxImageZoomModule.forRoot(),
    RouterModule.forRoot(
    [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: SignupComponent },
      { path: 'home', component: HomeComponent },
      { path: 'details', component: DetailsComponent },
      {path: 'newArrival', component: NavItemComponent}
    ]
  )
  ],
  declarations: [AppComponent, HomeComponent, LoginComponent, SignupComponent, NavItemComponent,
                SidebarComponent, CardGalaryComponent, NavbarComponent, CardCatagoryComponent, 
                DetailsComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
