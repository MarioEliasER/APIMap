using APIMap.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace APIMap.Repositories
{
    public class UbicacionRepository : Repository<Ubicacion>
    {
        public UbicacionRepository(DbContext context) : base(context) { }


    }
}
