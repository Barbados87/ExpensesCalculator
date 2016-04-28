using System.Collections.Generic;
using System.Linq;
using ExpensesCalculator.Models;

namespace ExpensesCalculator.ModelViews
{
    public class PersonModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public ICollection<ExpenseModel> Expenses { get; set; }

        public float TotalExpenses => Expenses.Sum(e => e.Amount);

        public PersonModel()
        {
            
        }

        public PersonModel(Person person)
        {
            Id = person.Id;
            Name = person.Name;
            Expenses = person.Expenses.Select(e => new ExpenseModel(e)).ToList();
        }
    }
}