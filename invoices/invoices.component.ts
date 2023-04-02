import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  columns: any;
  rows = [];

  constructor() { }

  ngOnInit() {
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

    this.rows = [
      { paymentId: 'HL-HYD-8906', customerId: 'HYD8906', customerName: 'Brahmam', amount: '18,00,000', tax: '7.56%', mode: 'online', date: '05-08-2016', notes: 'House Loan' },
      { paymentId: 'HL-HYD-3579', customerId: 'HYD3579', customerName: 'Nellore PeddaReddy', amount: '20,00,000', tax: '12.56%', mode: 'online', date: '05-08-2016', notes: 'Personal Loan' },
    ];
  }

}
