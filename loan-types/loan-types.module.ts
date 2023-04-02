import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoanTypesComponent } from './loan-types.component';


const routes: Routes = [
  { path: '', component: LoanTypesComponent }
];

@NgModule({
  declarations: [LoanTypesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LoanTypesModule { }
