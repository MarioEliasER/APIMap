//using APIMap.Models.Entities;

//namespace APIMap.Repositories
//{
//    public class DepartamentoRepository
//    {
//        public WebsitosApimapContext Context { get; }

//        public DepartamentoRepository(WebsitosApimapContext context)
//        {
//            Context = context;
//        }

//        public IEnumerable<Departamento> GetAll()
//        {
//            return Context.Departamento.OrderBy(x => x.Id);
//        }

//        public Departamento? Get(int id)
//        {
//            return Context.Departamento.Find(id);
//        }

//        public void Insert(Departamento departamento)
//        {
//            Context.Departamento.Add(departamento);
//            Context.SaveChanges();
//        }

//        public void Update(Departamento departamento)
//        {
//            Context.Departamento.Update(departamento);
//            Context.SaveChanges();
//        }

//        public void Delete(Departamento departamento)
//        {
//            Context.Departamento.Remove(departamento);
//            Context.SaveChanges();
//        }

//        public void SaveChanges()
//        {
//            Context.SaveChanges();
//        }
//    }

//}
