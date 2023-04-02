using System;
using System.Collections.Generic;

#nullable disable

namespace LoanApp.DB.Models
{
    public partial class TblCustomer
    {
        public TblCustomer()
        {
            TblInvoices = new HashSet<TblInvoice>();
            TblLoanTypes = new HashSet<TblLoanType>();
            TblPayments = new HashSet<TblPayment>();
        }

        public string CustomerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string EmailAddress { get; set; }
        public string Address { get; set; }
        public string Department { get; set; }

        public virtual ICollection<TblInvoice> TblInvoices { get; set; }
        public virtual ICollection<TblLoanType> TblLoanTypes { get; set; }
        public virtual ICollection<TblPayment> TblPayments { get; set; }
    }
}
