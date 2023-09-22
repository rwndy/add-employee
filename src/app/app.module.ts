import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './admin/components/form/form.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './admin/pages/home/home.component';
import { EmployeerComponent } from './admin/pages/employeer/employeer.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    EmployeerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
