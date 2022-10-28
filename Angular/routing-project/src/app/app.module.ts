import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { AddfoodComponent } from './addfood/addfood.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodlistComponent,
    AddfoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
