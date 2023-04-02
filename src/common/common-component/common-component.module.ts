import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridlinkComponent } from '../gridlink/gridlink.component';
import { FilterPipe } from '../../pipes/search.pipe';
/*import { AddpaymentComponent } from '../../payments/add-edit/addpayment/addpayment.component';*/
import { DynamicformComponent } from '../../dynamicform/dynamicform.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [GridlinkComponent, FilterPipe, DynamicformComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [GridlinkComponent, FilterPipe, DynamicformComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class CommonComponentModule { }
