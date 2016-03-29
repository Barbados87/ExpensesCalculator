using System.Data.Entity;

namespace ExpensesCalculator.DAL
{
    public class CalculatorInitializer : DropCreateDatabaseIfModelChanges<CalculatorContext>
    {
        protected override void Seed(CalculatorContext context)
        {
            base.Seed(context);
        }
    }
}