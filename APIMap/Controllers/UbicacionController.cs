using APIMap.Models.DTO;
using APIMap.Models.Entities;
using APIMap.Models.Validators;
using APIMap.Repositories;
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

            var ubicacionDto = new UbicacionDTO
            {
                Id = ubicacion.Id,
                Nombre = ubicacion.Nombre,
                Descripcion = ubicacion.Descripcion,
                Area = ubicacion.Area
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

            var ubicacionesDto = ubicaciones.Select(u => new UbicacionDTO
            {
                Id = u.Id,
                Nombre = u.Nombre,
                Descripcion = u.Descripcion,
                Area = u.Area
            });

            return Ok(ubicacionesDto);
        }

        [HttpPost]
        public IActionResult Post(UbicacionDTO dto)
        {
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
                return Ok(ubicacion);
            }
            return BadRequest(result.Errors.Select(x => x.ErrorMessage));
        }

        [HttpPut]
        public IActionResult Put(UbicacionDTO dto)
        {
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
            return Ok();
        }
    }
}
