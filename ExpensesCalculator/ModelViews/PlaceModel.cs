using ExpensesCalculator.Models;

namespace ExpensesCalculator.ModelViews
{
    public class PlaceModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public PlaceModel()
        {

        }

        public PlaceModel(Place place)
        {
            Id = place.Id;
            Name = place.Name;
        }
    }
}