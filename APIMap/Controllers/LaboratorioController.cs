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
//    public class LaboratorioController : ControllerBase
//    {
//        private readonly LaboratorioRepository repository;

//        public LaboratorioController(LaboratorioRepository repository)
//        {
//            this.repository = repository;
//        }

//        [HttpGet]
//        public IActionResult Get(int id)
//        {
//            var laboratorio = repository.Get(id);
//            if (laboratorio == null)
//            {
//                return NotFound();
//            }

//            var laboratoriodto = new LaboratorioDTO
//            {
//                Id = laboratorio.Id,
//                Nombre = laboratorio.Nombre,
//                Descripcion = laboratorio.Descripcion
//            };
//            return Ok(laboratoriodto);
//        }

//        [HttpPost]
//        public IActionResult Post(LaboratorioDTO dto)
//        {
//            LaboratorioValidator validator = new();
//            var result = validator.Validate(dto);
//            if (result.IsValid)
//            {
//                Laboratorio laboratorio = new()
//                {
//                    Id = dto.Id,
//                    Nombre = dto.Nombre,
//                    Descripcion = dto.Descripcion
//                };
//                repository.Insert(laboratorio);
//                return Ok(laboratorio);
//            }
//            return BadRequest(result.Errors.Select(x => x.ErrorMessage));
//        }

//        [HttpPut]
//        public IActionResult Put(LaboratorioDTO dto)
//        {
//            LaboratorioValidator validator = new();
//            var result = validator.Validate(dto);
//            if (result.IsValid)
//            {
//                var laboratorioresult = repository.Get(dto.Id);
//                if (laboratorioresult == null)
//                {
//                    return NotFound();
//                }
//                else
//                {
//                    laboratorioresult.Id = dto.Id;
//                    laboratorioresult.Nombre = dto.Nombre;
//                    laboratorioresult.Descripcion = dto.Descripcion;
//                    repository.Update(laboratorioresult);
//                    return Ok();
//                }
//            }
//            return BadRequest(result.Errors.Select(x => x.ErrorMessage));
//        }

//        [HttpDelete("{id}")]
//        public IActionResult Delete(int id)
//        {
//            var laboratorio = repository.Get(id);
//            if (laboratorio == null)
//            {
//                return NotFound();
//            }
//            repository.Delete(laboratorio);
//            return Ok();
//        }
//    }
//}
