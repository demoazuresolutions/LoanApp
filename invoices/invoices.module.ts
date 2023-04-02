import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InvoicesComponent } from './invoices.component';
import { CommonComponentModule } from '../common/common-component/common-component.module';
/*import { GridlinkComponent } from '../common/gridlink/gridlink.component';*/


const routes: Routes = [
  { path: '', component: InvoicesComponent }
];

@NgModule({
  declarations: [InvoicesComponent],
  imports: [
    CommonModule,
    CommonComponentModule,
    RouterModule.forChild(routes)
  ]
})
export class InvoicesModule { }
