////using APIMap.Models.DTO;
//using APIMap.Models.DTO;
//using APIMap.Models.Entities;
//using APIMap.Models.Validators;
//using APIMap.Repositories;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;

//namespace APIMap.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class EdificioController : ControllerBase
//    {
//        private readonly EdificioRepository repository;

//        public EdificioController(EdificioRepository repository)
//        {
//            this.repository = repository;
//        }

//        [HttpGet]
//        public IActionResult Get(int id)
//        {
//            var edificio = repository.Get(id);
//            if (edificio == null)
//            {
//                return NotFound();
//            }

//            var edificiodto = new EdificioDTO
//            {
//                Id = edificio.Id,
//                Nombre = edificio.Nombre,
//                Descripcion = edificio.Descripcion
//            };
//            return Ok(edificiodto);
//        }

//        [HttpPost]
//        public IActionResult Post(EdificioDTO dto)
//        {
//            EdificioValidator validator = new();
//            var result = validator.Validate(dto);
//            if (result.IsValid)
//            {
//                Edificio edificio = new()
//                {
//                    Id = dto.Id,
//                    Nombre = dto.Nombre,
//                    Descripcion = dto.Descripcion
//                };
//                repository.Insert(edificio);
//                return Ok(edificio);
//            }
//            return BadRequest(result.Errors.Select(x => x.ErrorMessage));
//        }

//        [HttpPut]
//        public IActionResult Put(EdificioDTO dto)
//        {
//            EdificioValidator validator = new();
//            var result = validator.Validate(dto);
//            if (result.IsValid)
//            {
//                var edificioresult = repository.Get(dto.Id);
//                if (edificioresult == null)
//                {
//                    return NotFound();
//                }
//                else
//                {
//                    edificioresult.Id = dto.Id;
//                    edificioresult.Nombre = dto.Nombre;
//                    edificioresult.Descripcion = dto.Descripcion;
//                    repository.Update(edificioresult);
//                    return Ok();
//                }
//            }
//            return BadRequest(result.Errors.Select(x => x.ErrorMessage));
//        }

//        [HttpDelete("{id}")]
//        public IActionResult Delete(int id)
//        {
//            var edificio = repository.Get(id);
//            if (edificio == null)
//            {
//                return NotFound();
//            }
//            repository.Delete(edificio);
//            return Ok();
//        }
//    }
//}
