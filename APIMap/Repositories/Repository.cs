using APIMap.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace APIMap.Repositories
{
    public class Repository<T> where T : class
    {
        private readonly WebsitosApimapContext _context;
        private readonly DbSet<T> _dbSet;

        public Repository(WebsitosApimapContext context)
        {
            _context = context;
            _dbSet = context.Set<T>();
        }

        public IEnumerable<T> GetAll(Func<IQueryable<T>, IOrderedQueryable<T>>? orderBy = null)
        {
            var query = _dbSet.AsQueryable();
            return orderBy != null ? orderBy(query).ToList() : query.ToList();
        }

        public T? Get(object id)
        {
            return _dbSet.Find(id);
        }

        public void Insert(T entity)
        {
            _dbSet.Add(entity);
            _context.SaveChanges();
        }

        public void Update(T entity)
        {
            _dbSet.Update(entity);
            _context.SaveChanges();
        }

        public void Delete(T entity)
        {
            _dbSet.Remove(entity);
            _context.SaveChanges();
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }
    }
}
