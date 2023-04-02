using LoanApp.DB.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LoanApp.Controllers
{
    [Route("api/loantypes/")]
    public class LoanTypeController : Controller
    {
        private LoansContext _context;
        public LoanTypeController(LoansContext context)
        {
            _context = context;
        }

        [HttpGet("getLoanTypes")]
        public IActionResult GetLoanTypes()
        {
            return Ok(_context.TblLoanTypes.ToList());
        }
    }
}
