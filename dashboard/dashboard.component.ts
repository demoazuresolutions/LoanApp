import { Component, OnInit } from '@angular/core';
import { LoanStatusService } from '../services/loanStatus.service';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  columns: any;
  rows = [];
  customercolumns: any;
  customerrows = [];

  constructor(private loanStatus: LoanStatusService, private dashboardService: DashboardService) { }

  ngOnInit() {
    this.columns = [
      { name: 'Loan Id', title: 'Loan Id', valueKey: 'loanId', field: 'link' },
      { name: 'Customer Name', title: 'Customer Name', valueKey: 'customerName', field: 'text' },
      { name: 'Loan Type', title: 'Loan Type', valueKey: 'loanType', field: 'text' },
      { name: 'Last Payment', title: 'Last Payment', valueKey: 'lastPayment', field: 'text' },
      { name: 'Payment Due', title: 'Payment Due', valueKey: 'paymentDue', field: 'text' },
      { name: 'Loan Status', title: 'Loan Status', valueKey: 'loanStatus', field: 'text' },
    ];

    this.rows = [
      { loanId: 'LN-HYD-HL-8906', customerName: 'Brahmam', loanType: 'House Loan', lastPayment: 'July 2022', paymentDue: '0', loanStatus: 'Active' },
      { loanId: 'LN-HYD-PL-3579', customerName: 'Nellore PeddaReddy', loanType: 'Personal Loan', lastPayment: 'May 2022', paymentDue: '36779.53', loanStatus: 'Active' },
      { loanId: 'LN-HYD-VL-5540', customerName: 'Jalsa Kishore', loanType: 'Auto Loan', lastPayment: 'Jan 2022', paymentDue: '140000', loanStatus: 'Risk' },
      { loanId: 'LN-HYD-GL-8761', customerName: 'Crazy Mohan', loanType: 'Gold Loan', lastPayment: 'Jan 2022', paymentDue: '1066700', loanStatus: 'Inactive' },
    ];



    this.customercolumns = [
      { name: 'Customer Id', title: 'Customer Id', valueKey: 'customerId', field: 'link' },
      { name: 'First Name', title: 'First Name', valueKey: 'firstName', field: 'text' },
      { name: 'Last Name', title: 'Last Name', valueKey: 'lastName', field: 'text' },
      { name: 'Phone Number', title: 'Phone Number', valueKey: 'phoneNumber', field: 'text' },
      { name: 'Email Address', title: 'Email Address', valueKey: 'emailAddress', field: 'text' },
      { name: 'Address', title: 'Address', valueKey: 'address', field: 'text' },
      { name: 'Department', title: 'Department', valueKey: 'department', field: 'text' }
    ];

    this.customerrows = [
      { customerId: 'HYD8906', firstName: 'Test', lastName: 'Loan', phoneNumber: '+91 9997678322', emailAddress: 'testLoan@icici.com', address: 'Hyderabad', department: 'House Loan Section' },
      { customerId: 'HYD3579', firstName: 'Preapproval', lastName: 'Loan', phoneNumber: '+91 9997678322', emailAddress: 'preapprovalLoan@icici.com', address: 'Hyderabad', department: 'Personal Loan Section' },
    ];

    this.dashboardService.getCardDetails().subscribe(data => {
      var cardData = data;
    });
  }

  getLoanStatus(val: string, field: string) {
    return this.loanStatus.getLoanStatusStyle(val, field);
  }
}
