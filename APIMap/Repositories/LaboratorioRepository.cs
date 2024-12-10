//using APIMap.Models.Entities;

//namespace APIMap.Repositories
//{
//    public class LaboratorioRepository
//    {
//        public WebsitosApimapContext Context { get; }

//        public LaboratorioRepository(WebsitosApimapContext context)
//        {
//            Context = context;
//        }

//        public IEnumerable<Laboratorio> GetAll()
//        {
//            return Context.Laboratorio.OrderBy(x => x.Id);
//        }

//        public Laboratorio? Get(int id)
//        {
//            return Context.Laboratorio.Find(id);
//        }

//        public void Insert(Laboratorio laboratorio)
//        {
//            Context.Laboratorio.Add(laboratorio);
//            Context.SaveChanges();
//        }

//        public void Update(Laboratorio laboratorio)
//        {
//            Context.Laboratorio.Update(laboratorio);
//            Context.SaveChanges();
//        }

//        public void Delete(Laboratorio laboratorio)
//        {
//            Context.Laboratorio.Remove(laboratorio);
//            Context.SaveChanges();
//        }

//        public void SaveChanges()
//        {
//            Context.SaveChanges();
//        }
//    }

//}
