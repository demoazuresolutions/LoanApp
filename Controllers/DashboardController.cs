using LoanApp.DB.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace LoanApp.Controllers
{
    [Route("api/dashboard/")]
    public class DashboardController : Controller
    {
        private LoansContext _context;
        public DashboardController(LoansContext context)
        {
            _context = context;
        }

        [HttpGet("getCardDetails")]
        public IActionResult GetCardDetails()
        {
            return Ok(_context.TblLoanTypes.ToList());
        }
    }
}
