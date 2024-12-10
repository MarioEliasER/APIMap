using APIMap.Models.Entities;

namespace APIMap.Repositories
{
	public class UsuarioRepository : Repository<Usuario>
	{
        public UsuarioRepository(WebsitosApimapContext context) : base(context) { }



        //public UsuarioRepository(WebsitosApimapContext context)
        //{
        //	Context = context;
        //}

        //public WebsitosApimapContext Context { get; }

        //public IEnumerable<Usuario> GetAll()
        //{
        //	return Context.Usuario.OrderBy(x => x.Nombreusuario);
        //}

        //      public Usuario? Get(int id)
        //      {
        //          return Context.Usuario.Find(id);
        //      }

        //      public void Insert(Usuario actividad)
        //      {
        //          Context.Usuario.Add(actividad);
        //          Context.SaveChanges();
        //      }

        //      public void Update(Usuario actividad)
        //      {
        //          Context.Usuario.Update(actividad);
        //          Context.SaveChanges();
        //      }

        //      public void Delete(Usuario actividad)
        //      {
        //          Context.Usuario.Remove(actividad);
        //          Context.SaveChanges();
        //      }

        //      public void SaveChanges()
        //      {
        //          Context.SaveChanges();
        //      }
    }
}
