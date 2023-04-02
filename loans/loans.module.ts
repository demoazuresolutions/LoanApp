import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoansComponent } from './loans.component';
import { CommonComponentModule } from '../common/common-component/common-component.module';


const routes: Routes = [
  { path: '', component: LoansComponent }
];

@NgModule({
  declarations: [LoansComponent],
  imports: [
    CommonModule,
    CommonComponentModule,
    RouterModule.forChild(routes)
  ]
})
export class LoansModule { }
