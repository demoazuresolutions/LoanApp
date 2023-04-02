using System;
using System.Collections.Generic;

#nullable disable

namespace LoanApp.DB.Models
{
    public partial class TblLoanType
    {
        public string LoanTypeId { get; set; }
        public string CustomerId { get; set; }
        public string CustomerName { get; set; }
        public string LoanType { get; set; }
        public DateTime ActionDate { get; set; }

        public virtual TblCustomer Customer { get; set; }
    }
}
