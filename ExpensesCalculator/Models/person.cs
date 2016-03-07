using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ExpensesCalculator.Models
{
    public class Person
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public ICollection<Expense> Expenses { get; set; }
    }
}