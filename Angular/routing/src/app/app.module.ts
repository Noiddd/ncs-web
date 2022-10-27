import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpDeptListComponent } from './emp-dept-list/emp-dept-list.component';
import { AllEmpDataComponent } from './all-emp-data/all-emp-data.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmpDeptListComponent,
    AllEmpDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
