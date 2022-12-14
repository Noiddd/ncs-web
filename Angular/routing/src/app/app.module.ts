import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpDeptListComponent } from './emp-dept-list/emp-dept-list.component';
import { AllEmpDataComponent } from './all-emp-data/all-emp-data.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmpDeptListComponent,
    AllEmpDataComponent,
    PageNotFoundComponent,
    IndexComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
