using APIMap.Models.DTO;
using APIMap.Models.Entities;
using APIMap.Models.Validators;
using APIMap.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APIMap.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UbicacionController : ControllerBase
    {
        private readonly Repository<Ubicacion> _repository;

        public UbicacionController(Repository<Ubicacion> repository)
        {
            _repository = repository;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var ubicacion = _repository.Get(id);
            if (ubicacion == null)
            {
                return NotFound();
            }

            string imagePath = $"wwwroot/images/diseños/{ubicacion.Nombre}.jpg";
            string imageUrl = System.IO.File.Exists(imagePath) ? $"/images/diseños/{ubicacion.Nombre}.jpg" : null;

            var ubicacionDto = new UbicacionDTO
            {
                Id = ubicacion.Id,
                Nombre = ubicacion.Nombre,
                Descripcion = ubicacion.Descripcion,
                Area = ubicacion.Area,
                ImagenUrl = imageUrl
            };
            return Ok(ubicacionDto);
        }

        [HttpGet]
        public IActionResult GetAll([FromQuery] string? area)
        {
            var ubicaciones = _repository.GetAll();

            if (!string.IsNullOrEmpty(area))
            {
                ubicaciones = ubicaciones.Where(u => u.Area.Equals(area, StringComparison.OrdinalIgnoreCase));
            }

            var ubicacionesDto = ubicaciones.Select(u =>
            {
                string imagePath = $"wwwroot/images/diseños/{u.Nombre}.jpg";
                string imageUrl = System.IO.File.Exists(imagePath) ? $"/images/diseños/{u.Nombre}.jpg" : null;
                return new UbicacionDTO
                {
                    Id = u.Id,
                    Nombre = u.Nombre,
                    Descripcion = u.Descripcion,
                    Area = u.Area,
                    ImagenUrl = imageUrl
                };
            });
            return Ok(ubicacionesDto);
        }

        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> Post([FromForm] UbicacionDTO dto)
        {
            if (!System.IO.Directory.Exists("wwwroot/images/diseños"))
            {
                System.IO.Directory.CreateDirectory("wwwroot/images/diseños");
            }
            UbicacionValidator validator = new();
            var result = validator.Validate(dto);
            if (result.IsValid)
            {
                var ubicacion = new Ubicacion
                {
                    Nombre = dto.Nombre,
                    Descripcion = dto.Descripcion,
                    Area = dto.Area
                };
                _repository.Insert(ubicacion);
                if (dto.Imagen != null)
                {
                    string imagePath = $"wwwroot/images/diseños/{ubicacion.Nombre}.jpg";
                    using (var stream = new FileStream(imagePath, FileMode.Create))
                    {
                        await dto.Imagen.CopyToAsync(stream);
                    }
                }
                else
                {
                    return BadRequest("La imagen es requerida.");
                }
                return Ok(ubicacion);
            }
            return BadRequest(result.Errors.Select(x => x.ErrorMessage));
        }

        [HttpPut]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> Put([FromForm] UbicacionDTO dto)
        {
            if (!System.IO.Directory.Exists("wwwroot/images/diseños"))
            {
                System.IO.Directory.CreateDirectory("wwwroot/images/diseños");
            }
            UbicacionValidator validator = new();
            var result = validator.Validate(dto);
            if (result.IsValid)
            {
                var ubicacion = _repository.Get(dto.Id);
                if (ubicacion == null)
                {
                    return NotFound();
                }

                ubicacion.Nombre = dto.Nombre;
                ubicacion.Descripcion = dto.Descripcion;
                ubicacion.Area = dto.Area;

                _repository.Update(ubicacion);
                if (dto.Imagen != null)
                {
                    string imagePath = $"wwwroot/images/diseños/{ubicacion.Nombre}.jpg";
                    using (var stream = new FileStream(imagePath, FileMode.Create))
                    {
                        await dto.Imagen.CopyToAsync(stream);
                    }
                }

                return Ok();
            }
            return BadRequest(result.Errors.Select(x => x.ErrorMessage));
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var ubicacion = _repository.Get(id);
            if (ubicacion == null)
            {
                return NotFound();
            }
            _repository.Delete(ubicacion);
            string imagePath = $"wwwroot/images/diseños/{ubicacion.Nombre}.jpg";
            if (System.IO.File.Exists(imagePath))
            {
                System.IO.File.Delete(imagePath);
            }
            return Ok();
        }

        [HttpGet("ConvertImage")]
        public string ConvertImageToBase64(string imagePath)
        {
            if (System.IO.File.Exists(imagePath))
            {
                byte[] imageArray = System.IO.File.ReadAllBytes(imagePath);
                string base64ImageRepresentation = Convert.ToBase64String(imageArray);
                return base64ImageRepresentation;
            }
            return "";
        }
    }
}
