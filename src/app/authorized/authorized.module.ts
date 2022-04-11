import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizedComponent } from './authorized.component';
import { HomeComponent } from './home/home.component';
import { AuthorizedRoutingModule } from './authorized-routing.module';



@NgModule({
  declarations: [
    AuthorizedComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AuthorizedRoutingModule
  ]
})
export class AuthorizedModule { }
