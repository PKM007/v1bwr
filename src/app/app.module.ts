import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './hotel-management/header/header.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { HotelManagementModule } from './hotel-management/hotel-management.module';
import { MainLandingComponent } from './hotel-management/main-landing/main-landing.component';
import { FooterComponent } from './hotel-management/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './hotel-management/main-nav/main-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLandingComponent,
    FooterComponent,
    MainNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    BrowserAnimationsModule,
    HotelManagementModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [NgImageSliderModule, HotelManagementModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
