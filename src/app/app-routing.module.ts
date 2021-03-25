import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddressComponent } from './address/address.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

  {path:"home", component:HomeComponent},
  {path:"address", component:AddressComponent},
  {path:"about", component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
