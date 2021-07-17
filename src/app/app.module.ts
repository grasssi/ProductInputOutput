import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildProductComponent } from './child-product/child-product.component';
import { ParentProductComponent } from './parent-product/parent-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildProductComponent,
    ParentProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
