//using APIMap.Models.Entities;

//namespace APIMap.Repositories
//{
//    public class SalonRepository
//    {
//        public WebsitosApimapContext Context { get; }

//        public SalonRepository(WebsitosApimapContext context)
//        {
//            Context = context;
//        }

//        public IEnumerable<Salon> GetAll()
//        {
//            return Context.Salon.OrderBy(x => x.Id);
//        }

//        public Salon? Get(int id)
//        {
//            return Context.Salon.Find(id);
//        }

//        public void Insert(Salon salon)
//        {
//            Context.Salon.Add(salon);
//            Context.SaveChanges();
//        }

//        public void Update(Salon salon)
//        {
//            Context.Salon.Update(salon);
//            Context.SaveChanges();
//        }

//        public void Delete(Salon salon)
//        {
//            Context.Salon.Remove(salon);
//            Context.SaveChanges();
//        }

//        public void SaveChanges()
//        {
//            Context.SaveChanges();
//        }
//    }

//}
