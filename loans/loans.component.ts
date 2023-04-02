import { Component, OnInit } from '@angular/core';
import { LoanStatusService } from '../services/loanStatus.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  columns: any;
  rows = [];

  constructor(private loanStatus: LoanStatusService) { }

  ngOnInit() {
    this.columns = [
      { name: 'Loan Id', title: 'Loan Id', valueKey: 'loanId', field: 'link' },
      { name: 'Customer Name', title: 'Customer Name', valueKey: 'customerName', field: 'text' },
      { name: 'Loan Type', title: 'Loan Type', valueKey: 'loanType', field: 'text' },
      { name: 'Installments', title: 'Installments', valueKey: 'installments', field: 'text' },
      { name: 'ROI', title: 'ROI', valueKey: 'roi', field: 'text' },
      { name: 'Total Amount', title: 'Total Amount', valueKey: 'totalAmount', field: 'text' },
      { name: 'Pending Amount', title: 'Pending Amount', valueKey: 'pendingAmount', field: 'text' },
      { name: 'Loan Status', title: 'Loan Status', valueKey: 'loanStatus', field: 'text' },
    ];

    this.rows = [
      { loanId: 'LN-HYD-HL-8906', customerName: 'Brahmam', loanType: 'House Loan', installments: '86', roi: '7.53', totalAmount: '18,00,000', pendingAmount: '12,00,000' , loanStatus: 'Active' },
      { loanId: 'LN-HYD-PL-3579', customerName: 'Nellore PeddaReddy', loanType: 'Personal Loan', installments: '133', roi: '12.1', totalAmount: '30,00,000', pendingAmount: '26,00,000', loanStatus: 'Active' },
      { loanId: 'LN-HYD-VL-5540', customerName: 'Jalsa Kishore', loanType: 'Auto Loan', installments: '97', roi: '7.0', totalAmount: '15,00,000', pendingAmount: '10,00,000', loanStatus: 'Risk' },
      { loanId: 'LN-HYD-GL-8761', customerName: 'Crazy Mohan', loanType: 'Gold Loan', installments: '230', roi: '9.9', totalAmount: '50,00,000', pendingAmount: '48,00,000', loanStatus: 'Inactive' },
    ];
  }

  getLoanStatus(val: string, field: string) {
    return this.loanStatus.getLoanStatusStyle(val, field);
  }
}
