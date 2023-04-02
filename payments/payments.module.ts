import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsComponent } from './payments.component';
/*import { DynamicformComponent } from '../dynamicform/dynamicform.component';*/
import { CommonComponentModule } from '../common/common-component/common-component.module';
/*import { AddpaymentComponent } from '../payments/add-edit/addpayment/addpayment.component';*/



const routes: Routes = [
  { path: '', component: PaymentsComponent }
];

@NgModule({
  declarations: [PaymentsComponent],
  imports: [
    CommonModule,
    CommonComponentModule,
    RouterModule.forChild(routes)
  ]
})
export class PaymentsModule { }
