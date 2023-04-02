import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { FormBuilderService } from '../../services/formbuilder.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customerForm: FormGroup;
  @Input() set data(value) {
    this.customerForm = this.getCustomer(value);
  }
  @Input() action: string;


  constructor(public activeModal: NgbActiveModal, private customerService: CustomerService, private router: Router, private formBuilderService: FormBuilderService) { }

  ngOnInit() {
  }

  getCustomer(value): FormGroup {
    value = value || { customerId: '', firstName: null, lastName: null, phoneNumber: null, emailAddress: null, address: null, department: null, image: null };
    return new FormGroup({
      customerId: new FormControl(value.customerId),
      firstName: new FormControl(value.firstName),
      lastName: new FormControl(value.lastName),
      phoneNumber: new FormControl(value.phoneNumber),
      emailAddress: new FormControl(value.emailAddress),
      address: new FormControl(value.address),
      department: new FormControl(value.department),
      action: new FormControl(value.action)
    });
    //this.formBuilderService.formFields = this.customerService.setForm(value);
    //return this.customerService.setForm(value);
  }

  submit() {

    this.activeModal.close(this.customerForm.value);

    console.log(this.customerForm.value);

    this.customerService.saveCustomer(this.customerForm.value).subscribe(data => {
      if (data) {
        alert('Customer Added Successfully');
        this.router.navigateByUrl('customers');
        /*this.router.navigate(['/customers']);*/
      } else {
        alert('There is a error while adding Customer. Please try again.');
      }
    });
  }


}
