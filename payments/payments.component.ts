import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../services/payment.service';
import { FormBuilderService } from '../services/formbuilder.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DynamicformComponent } from '../dynamicform/dynamicform.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  columns: any;
  rows:any = [];

  constructor(private paymentService: PaymentService, private formBuilderService: FormBuilderService, private modalService: NgbModal, private dynamicComponent: DynamicformComponent,
    private router: Router) { }

  ngOnInit() {
    this.formBuilderService.formFields = this.paymentService.setForm();

    this.columns = [
      { name: 'Payment Id', title: 'Payment Id', valueKey: 'paymentId', field: 'link' },
      { name: 'Customer Id', title: 'Customer Id', valueKey: 'customerId', field: 'text' },
      { name: 'Customer Name', title: 'Customer Name', valueKey: 'customerName', field: 'text' },
      { name: 'Amount', title: 'Amount', valueKey: 'amount', field: 'text' },
      { name: 'Tax', title: 'Tax', valueKey: 'tax', field: 'text' },
      { name: 'Mode', title: 'Mode', valueKey: 'mode', field: 'text' },
      { name: 'Date', title: 'Date', valueKey: 'date', field: 'text' },
      { name: 'Notes', title: 'Notes', valueKey: 'notes', field: 'text' }
    ];

    //this.rows = [
    //  { paymentId: 'HL-HYD-8906', customerId: 'HYD8906', customerName: 'Brahmam', amount: '18,00,000', tax: '7.56%', mode: 'online', date: '05-08-2016', notes: 'House Loan' },
    //  { paymentId: 'HL-HYD-3579', customerId: 'HYD3579', customerName: 'Nellore PeddaReddy', amount: '20,00,000', tax: '12.56%', mode: 'online', date: '05-08-2016', notes: 'Personal Loan' },
    //];

    this.getPayments();
  }

  getPayments() {
    this.paymentService.getPayments().subscribe(data => {
      this.rows = data;
    })
  }

  addPayment() {
    const modalRef = this.modalService.open(DynamicformComponent, { backdrop: 'static' });
    //modalRef.componentInstance.data = this.form.value.customer;
    modalRef.componentInstance.entity = 'payment';
    modalRef.componentInstance.action = 'Add';
    modalRef.result.then(
      (result) => {
        //this.form.get('customer').patchValue(result);
        window.location.reload();
      }, (reason) => {

      }
    );

    //this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    //this.router.onSameUrlNavigation = 'reload';
    //this.router.navigateByUrl('payments');
    
  }

}
