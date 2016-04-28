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
    public class PeopleController : ApiController
    {
        private readonly CalculatorContext _dbContext = new CalculatorContext();

        [ResponseType(typeof(IEnumerable<PersonModel>))]
        public async Task<IHttpActionResult> Get()
        {
            return Ok(await GetPeople());
        }

        [ResponseType(typeof(PersonModel))]
        public async Task<IHttpActionResult> Get(int id)
        {
            return Ok(await GetPerson(id));
        }

        [ResponseType(typeof(PersonModel))]
        public async Task<IHttpActionResult> Post(Person person)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var isCorrect = await SaveAsync(person);

            return Ok(isCorrect);
        }
        
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _dbContext.Dispose();
            }
            base.Dispose(disposing);
        }

        private async Task<IEnumerable<PersonModel>> GetPeople()
        {
            var people = await _dbContext.Persons.Include(p => p.Expenses).ToListAsync();

            return people.Select(p => new PersonModel(p));
        }

        private async Task<PersonModel> GetPerson(int id)
        {
            var person = await _dbContext.Persons.Include(p => p.Expenses).Where(p => p.Id == id).FirstAsync();

            return new PersonModel(person);
        }

        private async Task<bool> SaveAsync(Person person)
        {
            _dbContext.Persons.Add(person);
            await _dbContext.SaveChangesAsync();

            return true;
        }
    }
}