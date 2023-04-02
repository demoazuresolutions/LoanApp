using LoanApp.DB.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LoanApp.Controllers
{
    [Route("api/invoices/")]
    public class InvoiceController : Controller
    {
        private LoansContext _context;
        public InvoiceController(LoansContext context)
        {
            _context = context;
        }

        [HttpGet("getInvoices")]
        public IActionResult GetInvoices()
        {
            return Ok(_context.TblInvoices.ToList());
        }
    }
}
