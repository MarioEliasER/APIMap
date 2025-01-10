namespace APIMap.Models.DTO
{
    public class UbicacionDTO
    {
        public int Id { get; set; }
        public string Nombre { get; set; } = null!;
        public string Area { get; set; } = null!;
        public string Descripcion { get; set; } = null!;
        public IFormFile Imagen { get; set; } = null!;
        public string? ImagenUrl { get; set; } // Para retornar la URL de la imagen en los GET
    }
}
