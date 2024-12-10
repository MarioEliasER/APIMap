//using APIMap.Models.Entities;

//namespace APIMap.Repositories
//{
//    public class EdificioRepository
//    {
//        public WebsitosApimapContext Context { get; }

//        public EdificioRepository(WebsitosApimapContext context)
//        {
//            Context = context;
//        }

//        public IEnumerable<Edificio> GetAll()
//        {
//            return Context.Edificio.OrderBy(x => x.Id);
//        }

//        public Edificio? Get(int id)
//        {
//            return Context.Edificio.Find(id);
//        }

//        public void Insert(Edificio edificio)
//        {
//            Context.Edificio.Add(edificio);
//            Context.SaveChanges();
//        }

//        public void Update(Edificio edificio)
//        {
//            Context.Edificio.Update(edificio);
//            Context.SaveChanges();
//        }

//        public void Delete(Edificio edificio)
//        {
//            Context.Edificio.Remove(edificio);
//            Context.SaveChanges();
//        }

//        public void SaveChanges()
//        {
//            Context.SaveChanges();
//        }
//    }

//}
