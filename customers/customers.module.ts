import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { CustomersComponent } from './customers.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { CommonComponentModule } from '../common/common-component/common-component.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
/*import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';*/
/*import { GridlinkComponent } from '../common/gridlink/gridlink.component';*/


const routes: Routes = [
  { path: '', component: ListCustomersComponent }
];

@NgModule({
  declarations: [
    CustomersComponent,
    ListCustomersComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    DeleteCustomerComponent,
    SearchCustomerComponent,
    JwPaginationComponent,
    /*GridlinkComponent*/
  ],
  imports: [
    CommonModule,
    CommonComponentModule,
    ReactiveFormsModule,
    FormsModule,
    /*NgbModule, NgbActiveModal,*/
    RouterModule.forChild(routes)
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  /*entryComponents: [AddCustomerComponent]*/
})
export class CustomersModule { }
