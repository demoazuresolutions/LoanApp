using LoanApp.DB.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LoanApp.Controllers
{
    [Route("api/loans/")]
    public class LoanController : Controller
    {
        private LoansContext _context;
        public LoanController(LoansContext context)
        {
            _context = context;
        }

        [HttpGet("getLoans")]
        public IActionResult GetLoans()
        {
            return Ok(_context.TblLoans.ToList());
        }
    }
}
