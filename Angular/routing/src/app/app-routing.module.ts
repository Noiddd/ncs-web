import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEmpDataComponent } from './all-emp-data/all-emp-data.component';
import { EmpDeptListComponent } from './emp-dept-list/emp-dept-list.component';
import { EmpListComponent } from './emp-list/emp-list.component';

const routes: Routes = [
  { path: 'allEmpData', component: AllEmpDataComponent },
  { path: 'empDeptList', component: EmpDeptListComponent },
  { path: 'empList', component: EmpListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
