using ExpensesCalculator.Models;

namespace ExpensesCalculator.ModelViews
{
    public class ExpenseTypeModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public ExpenseTypeModel()
        {

        }

        public ExpenseTypeModel(ExpenseType type)
        {
            Id = type.Id;
            Name = type.Name;
        }
    }
}