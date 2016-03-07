using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ExpensesCalculator.Models
{
    public class Expense
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public DateTime Date { get; set; }

        public float Amount { get; set; }

        public int PersonId { get; set; }

        public int TypeId { get; set; }

        public int PlaceId { get; set; }

        public virtual Person Person { get; set; }

        public ExpenseType Type { get; set; }

        public Place Place { get; set; }
    }
}