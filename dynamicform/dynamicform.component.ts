import { Component, OnInit, Injectable, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilderService } from '../services/formbuilder.service';
import { PaymentService } from '../services/payment.service';


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.css']
})
export class DynamicformComponent implements OnInit {
  dynamicForm: FormGroup;
  formFields: any[] = [];
  formValues = [];
  @Input() entity: string;
  @Input() action: string;
  displaylistcontainer: boolean = false;
  selectedOption: string = 'Select an option';
  selectedvalue: string = '';
  @Input() data: any;

  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal, private formBuilderService: FormBuilderService,
    private paymentService: PaymentService) { }

  ngOnInit() {
    this.getDynamicForm();
  }

  getDynamicForm() {
    this.formFields = this.formBuilderService.formFields;
    this.dynamicForm = this.generateControlsForDynamicForm();
    if (this.action === 'Edit') {
      this.dynamicForm.setValue(this.data);
      if (this.entity === 'payment') {
        this.selectedOption = this.data.customerName;
      }
    }

    /*this.formFields = [{ key: 'amount' }, { key: 'amount1' }, { key: 'amount2' }];*/
  }

  generateControlsForDynamicForm(): FormGroup {
    const form = this.formBuilder.group({});
    this.formFields.forEach(elem => {
      form.addControl(elem.key, this.generateFormGroup(form, elem));
    });

    return form;
  }

  generateFormGroup(form: FormGroup, field: { group: any[], key: string }): FormGroup {
    if (field.group) {
      const formGroup = this.formBuilder.group({});
      field.group.forEach(elem => {
        formGroup.addControl(elem.key, this.generateFormGroup(formGroup, elem));
      });

      return formGroup;
    } else {
      form.addControl(field.key, new FormControl(null));
    }
    return form;
  }
  togglelistcontainer() {
    this.displaylistcontainer = !this.displaylistcontainer;
    
  }
  oncustomerSelect(optionName, value) {
    this.selectedOption = optionName;
    this.selectedvalue = value;
    this.displaylistcontainer = false;
  }

  onSubmit() {
    if (this.entity === 'payment') {
      this.dynamicForm.value.customerId = this.selectedvalue;
      this.activeModal.close();
      this.paymentService.savePayment(this.dynamicForm.value).subscribe(data => {
        if (data) {
          window.location.reload();
          return "Payment added successfully";
        } else {
          return "Payment failure, Please try again.";
        }
      });
    }

    console.log(this.dynamicForm.value);
  }
}
