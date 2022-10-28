import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEmpDataComponent } from './all-emp-data/all-emp-data.component';
import { EmpDeptListComponent } from './emp-dept-list/emp-dept-list.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { IndexComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'allEmpData', component: AllEmpDataComponent },
  { path: 'empDeptList', component: EmpDeptListComponent },
  { path: 'empList', component: EmpListComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
