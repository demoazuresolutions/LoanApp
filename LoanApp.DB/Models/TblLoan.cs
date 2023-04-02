using System;
using System.Collections.Generic;

#nullable disable

namespace LoanApp.DB.Models
{
    public partial class TblLoan
    {
        public string LoanId { get; set; }
        public string CustomerName { get; set; }
        public string LoanType { get; set; }
        public int Installments { get; set; }
        public decimal Roi { get; set; }
        public string TotalAmount { get; set; }
        public string PendingAmount { get; set; }
        public string LoanStatus { get; set; }
    }
}
