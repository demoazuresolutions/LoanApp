using System;
using System.Collections.Generic;

#nullable disable

namespace LoanApp.DB.Models
{
    public partial class TblInvoice
    {
        public string PaymentId { get; set; }
        public string CustomerId { get; set; }
        public string CustomerName { get; set; }
        public string Amount { get; set; }
        public string Mode { get; set; }
        public DateTime Date { get; set; }
        public string Notes { get; set; }

        public virtual TblCustomer Customer { get; set; }
    }
}
