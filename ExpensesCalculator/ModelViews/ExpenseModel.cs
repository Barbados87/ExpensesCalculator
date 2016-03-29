using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ExpensesCalculator.Models;

namespace ExpensesCalculator.ModelViews
{
    public class ExpenseModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public DateTime Date { get; set; }

        public float Amount { get; set; }
        
        public PersonModel Person { get; set; }

        //public ExpenseTypeModel Type { get; set; }

        //public PlaceModel Place { get; set; }

        public ExpenseModel(Expense expense)
        {
            Id = expense.Id;
            Name = expense.Name;
            Description = expense.Description;
            Date = expense.Date;
            Amount = expense.Amount;
            Person = new PersonModel(expense.Person);
            //Type = new ExpenseTypeModel(expense.Type);
            //Place = new PlaceModel(expense.Place);
        }
    }
}