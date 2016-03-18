using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
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

        // POST: api/Expenses
        [ResponseType(typeof(Expense))]
        public async Task<IHttpActionResult> Post(Expense expense)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Expenses.Add(expense);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = expense.Id }, expense);
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
            var expenses = await db.Expenses.ToListAsync();

            return expenses.Select(e => new ExpenseModel(e));
        }
    }
}