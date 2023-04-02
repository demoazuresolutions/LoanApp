using LoanApp.DB.Models;
using LoanApp.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using LoanApp.Helper;

namespace LoanApp.Controllers
{
    [ApiController]
    [Route("api/customers/")]
    public class CustomerController : Controller
    {
        private LoansContext _context;
        public CustomerController(LoansContext context)
        {
            _context = context;
        }

        [HttpGet("getCustomers")]
        public IActionResult GetCustomers()
        {
            //Thread.Sleep(20000);
            List<CustomerDTO> customers = new List<CustomerDTO>();

            var customerList= _context.TblCustomers.ToList();
            foreach (var customer in customerList)
            {
                customers.Add(new CustomerDTO
                {
                    CustomerId=customer.CustomerId,
                    FirstName = customer.FirstName,
                    LastName = customer.LastName,
                    PhoneNumber = customer.PhoneNumber,
                    EmailAddress = customer.EmailAddress,
                    Address = customer.Address,
                    Department = customer.Department,
                    Action = ""
                });
            }
            return Ok(customers);
        }

        [HttpPost("saveCustomer")]
        public IActionResult SaveCustomer(CustomerDTO customer)
        {
            try
            {
                if (customer != null)
                {
                    //new entry
                    if (string.IsNullOrEmpty(customer.CustomerId))
                    {
                        string id = string.Empty;
                        if (customer.Department == "Home Loan")
                        {
                            id = "LB-HYD-HL";
                        }
                        else if (customer.Department == "Personal Loan")
                        {
                            id = "LB-HYD-PL";
                        }
                        else if (customer.Department == "Auto Loan")
                        {
                            id = "LB-HYD-VL";
                        }
                        else if (customer.Department == "Gold Loan")
                        {
                            id = "LB-HYD-GL";
                        }

                        id = id + "-" + Helper.Helper.EncryptedString(id);

                        TblCustomer newCustomer = new TblCustomer();
                        newCustomer.CustomerId = id;
                        newCustomer.FirstName = customer.FirstName;
                        newCustomer.LastName = customer.LastName;
                        newCustomer.PhoneNumber = customer.PhoneNumber;
                        newCustomer.EmailAddress = customer.EmailAddress;
                        newCustomer.Address = customer.Address;
                        newCustomer.Department = customer.Department;

                        _context.TblCustomers.Add(newCustomer);
                        _context.SaveChanges();

                    }
                    else
                    {
                        var customerDetails = _context.TblCustomers.FirstOrDefault(x => x.CustomerId == customer.CustomerId);
                        if (customerDetails != null)
                        {
                            customerDetails.FirstName = customer.FirstName;
                            customerDetails.LastName = customer.LastName;
                            customerDetails.PhoneNumber = customer.PhoneNumber;
                            customerDetails.EmailAddress = customer.EmailAddress;
                            customerDetails.Address = customer.Address;
                            customerDetails.Department = customer.Department;

                            _context.SaveChanges();
                        }
                    }
                }
                return Ok(true);
            }
            catch(Exception ex)
            {
                return Ok(false);
            }
        }

        [HttpGet("getCustomerNames")]
        public IActionResult GetCustomerNames()
        {

            List<DropdownModel> dropDownModels;
            dropDownModels = _context.TblCustomers
                .Select(X => new DropdownModel() { optionName = X.FirstName + " " + X.LastName, value = X.CustomerId.ToString() }).ToList();

            return Ok(dropDownModels);
        }

    }
}
