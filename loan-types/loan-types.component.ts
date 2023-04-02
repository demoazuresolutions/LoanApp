import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-types',
  templateUrl: './loan-types.component.html',
  styleUrls: ['./loan-types.component.css']
})
export class LoanTypesComponent implements OnInit {

  columns: any;
  rows = [];

  constructor() { }

  ngOnInit() {
    this.columns = [
      { name: 'Loan Type', title: 'Loan Type', valueKey: 'loanType', field: 'text' },
      { name: 'Loan Action', title: 'Loan Action', valueKey: 'loanAction', field: 'text' },
    ];

    this.rows = [
      { loanType: 'House Loan', loanAction: 'created on 16-8-2016' },
      { loanType: 'Personal Loan', loanAction: 'created on 15-5-2017' },
      { loanType: 'Auto Loan', loanAction: 'updated on 22-7-2021' },
      { loanType: 'Gold Loan', loanAction: 'deleted on 09-8-2022' },
    ];
  }

}
