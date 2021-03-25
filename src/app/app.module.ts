import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AddressComponent } from './address/address.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { AddressService } from './address.service';
import {AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    AddressComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule

  ],
  providers: [AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
