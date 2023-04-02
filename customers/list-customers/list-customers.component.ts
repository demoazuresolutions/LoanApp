import { Component, Inject, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ColumnMode, TableColumn, DatatableComponent, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CustomerService } from '../../services/customer.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css'],
  /*providers: [LinkDirective]*/
})
export class ListCustomersComponent implements OnInit {
  columns: any;
  @ViewChild('myTable', { static: true }) myTable: DatatableComponent;
  rows: any = [];
  pageOfItems: Array<any>;
  rows1 = [];
  searchText: string = '';
  sortorderasc: boolean = true;

  constructor(private customerService: CustomerService, private modalService: NgbModal, private addCustomerComponent: AddCustomerComponent, private router: Router) { }

  ngOnInit() {


    this.columns = [
      { name: 'Customer Id', title: 'Customer Id', valueKey:'customerId', field: 'link' },
      { name: 'First Name', title: 'First Name', valueKey: 'firstName', field: 'text' },
      { name: 'Last Name', title: 'Last Name', valueKey: 'lastName', field: 'text' },
      { name: 'Phone Number', title: 'Phone Number', valueKey: 'phoneNumber', field: 'text' },
      { name: 'Email Address', title: 'Email Address', valueKey: 'emailAddress', field: 'text' },
      { name: 'Address', title: 'Address', valueKey: 'address', field: 'text' },
      { name: 'Department', title: 'Department', valueKey: 'department', field: 'text' },
      { name: 'Action', title: 'Action', valueKey: 'action', field: 'image' },
    ];

    
    this.customerService.getCustomers().subscribe(data => {
      this.rows = data;
      console.log(data);
    });
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  //getCustomer(value): FormGroup {
  //  value = value || { name: null, surname: null };
  //  return new FormGroup({
  //    name: new FormControl(value.name),
  //    surname: new FormControl(value.surname)
  //  });
  //}
  
  form: FormGroup = new FormGroup({
    customer: this.addCustomerComponent.getCustomer({ firstName: null, lastName: null, phoneNumber: null, emailAddress: null, address: null, department: null, image: null })
  });

  addCustomer() {
    const modalRef = this.modalService.open(AddCustomerComponent, { backdrop: 'static' });
    modalRef.componentInstance.data = this.form.value.customer;
    modalRef.componentInstance.action = 'Add';
    modalRef.result.then(
      (result) => {
        this.form.get('customer').patchValue(result);
        window.location.reload();
      }, (reason) => {

      }
    );
  }

  editCustomer(data) {
    this.form.setValue({
      customer: {
        customerId: data.customerId,
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.phoneNumber,
        emailAddress: data.emailAddress,
        address: data.address,
        department: data.department,
        action: ''
      }
    })
    const modalRef = this.modalService.open(AddCustomerComponent, { backdrop: 'static' });
    modalRef.componentInstance.data = this.form.value.customer;
    modalRef.componentInstance.action = 'Edit';
    modalRef.result.then(
      (result) => {
        this.form.get('customer').patchValue(result);
        window.location.reload();
      }, (reason) => {

      }
    );
  }

  sort(valueKey) {
    //var fieldValues = [];
    //this.rows.forEach(function (el) {
    //  fieldValues.push(el[valueKey]);
    //});
    //console.log(fieldValues);
    //return fieldValues.sort();
    //return fieldValues.sort(function (a, b) { return a - b });
    /*this.rows = this.rows.sort((a, b) => a[valueKey] - b[valueKey]);*/

    this.sortorderasc = !this.sortorderasc;
    if (this.sortorderasc) {
      this.rows.sort(function (a, b) {
        return a[valueKey].localeCompare(b[valueKey]);
      });
    } else {
      this.rows.sort(function (a, b) {
        return b[valueKey].localeCompare(a[valueKey]);
      });
    }
  }

}
