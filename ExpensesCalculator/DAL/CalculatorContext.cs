using ExpensesCalculator.Models;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace ExpensesCalculator.DAL
{
    public class CalculatorContext : DbContext
    {
        public DbSet<Person> Persons { get; set; }

        public DbSet<Expense> Expenses { get; set; }

        public DbSet<Place> Places { get; set; }

        public CalculatorContext() : base("CalculatorContext")
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}