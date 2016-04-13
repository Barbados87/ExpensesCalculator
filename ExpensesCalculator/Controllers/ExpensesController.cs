using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using ExpensesCalculator.DAL;
using ExpensesCalculator.Models;
using ExpensesCalculator.ModelViews;

namespace ExpensesCalculator.Controllers
{
    public class ExpensesController : ApiController
    {
        private CalculatorContext db = new CalculatorContext();

        [ResponseType(typeof(IEnumerable<ExpenseModel>))]
        public async Task<IHttpActionResult> Get()
        {
            return Ok(await GetExpenses());
        }

        [ResponseType(typeof(IEnumerable<ExpenseModel>))]
        public async Task<IHttpActionResult> Get(int id)
        {
            return Ok(await GetExpenses(id));
        }

        // POST: api/Expenses
        [ResponseType(typeof(Expense))]
        public async Task<IHttpActionResult> Post(Expense expense)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var isCorrect = await SaveAsync(expense);

            return Ok(isCorrect);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private async Task<IEnumerable<ExpenseModel>> GetExpenses()
        {
            var expenses = await db.Expenses
                .Include(e => e.Person)
                .ToListAsync();

            return expenses.Select(e => new ExpenseModel(e));
        }

        private async Task<IEnumerable<ExpenseModel>> GetExpenses(int personId)
        {
            var expenses = await db.Expenses.Where(e => e.PersonId == personId).ToListAsync();

            return expenses.Select(e => new ExpenseModel(e));
        }

        private async Task<bool> SaveAsync(Expense expense)
        {
            db.Expenses.Add(expense);
            await db.SaveChangesAsync();

            return true;
        }
    }
}