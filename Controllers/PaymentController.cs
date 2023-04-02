using LoanApp.DB.Models;
using LoanApp.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LoanApp.Controllers
{
    [ApiController]
    [Route("api/payments/")]
    public class PaymentController : Controller
    {
        private LoansContext _context;
        public PaymentController(LoansContext context)
        {
            _context = context;
        }

        [HttpGet("getPayments")]
        public IActionResult GetPayments()
        {
            var payments = _context.TblPayments.ToList();
            List<PaymentDTO> paymentsdto = new List<PaymentDTO>();
            foreach(var payment in payments)
            {
                PaymentDTO paymentdto = new PaymentDTO
                {
                    PaymentId = payment.PaymentId,
                    CustomerId = payment.CustomerId,
                    CustomerName = payment.CustomerName,
                    Amount = payment.Amount,
                    Tax = payment.Tax,
                    Mode = payment.Mode,
                    Date = payment.Date.ToString(),
                    Notes = payment.Notes
                };
                paymentsdto.Add(paymentdto);
            }
            return Ok(paymentsdto);
        }

        [HttpPost("savePayment")]
        public IActionResult SavePayment(PaymentDTO paymentdto)
        {
            try
            {
                string paymentid = Helper.Helper.EncryptedString("payment" + DateTime.Now);

                TblPayment payment = new TblPayment();
                payment.PaymentId = "py-hyd-" + paymentid;
                payment.CustomerId = paymentdto.CustomerId;
                payment.CustomerName = paymentdto.CustomerName;
                payment.Amount = paymentdto.Amount;
                payment.Mode = paymentdto.Mode;
                payment.Date = Convert.ToDateTime(paymentdto.Date);
                payment.Notes = paymentdto.Notes;
                payment.Tax = paymentdto.Tax;

                _context.TblPayments.Add(payment);
                _context.SaveChanges();

                return Ok(true);
            }
            catch(Exception ex)
            {
                return Ok(false);
            }
        }
    }
}
