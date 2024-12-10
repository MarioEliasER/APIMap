//using APIMap.Models.Entities;

//namespace APIMap.Repositories
//{
//    public class AreaRepository
//    {
//        public WebsitosApimapContext Context { get; }

//        public AreaRepository(WebsitosApimapContext context)
//        {
//            Context = context;
//        }

//        public IEnumerable<Area> GetAll()
//        {
//            return Context.Area.OrderBy(x => x.Id);
//        }

//        public Area? Get(int id)
//        {
//            return Context.Area.Find(id);
//        }

//        public void Insert(Area area)
//        {
//            Context.Area.Add(area);
//            Context.SaveChanges();
//        }

//        public void Update(Area area)
//        {
//            Context.Area.Update(area);
//            Context.SaveChanges();
//        }

//        public void Delete(Area area)
//        {
//            Context.Area.Remove(area);
//            Context.SaveChanges();
//        }

//        public void SaveChanges()
//        {
//            Context.SaveChanges();
//        }
//    }
//}
