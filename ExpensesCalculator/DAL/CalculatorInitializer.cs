using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

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