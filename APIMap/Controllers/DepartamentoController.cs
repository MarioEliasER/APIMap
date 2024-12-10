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
//    public class DepartamentoController : ControllerBase
//    {
//        private readonly DepartamentoRepository repository;

//        public DepartamentoController(DepartamentoRepository repository)
//        {
//            this.repository = repository;
//        }

//        [HttpGet]
//        public IActionResult Get(int id)
//        {
//            var departamento = repository.Get(id);
//            if (departamento == null)
//            {
//                return NotFound();
//            }

//            var departamentodto = new DepartamentoDTO
//            {
//                Id = departamento.Id,
//                Nombre = departamento.Nombre,
//                Descripcion = departamento.Descripcion
//            };
//            return Ok(departamentodto);
//        }

//        [HttpPost]
//        public IActionResult Post(DepartamentoDTO dto)
//        {
//            DepartamentoValidator validator = new();
//            var result = validator.Validate(dto);
//            if (result.IsValid)
//            {
//                Departamento departamentopost = new()
//                {
//                    Id = dto.Id,
//                    Nombre = dto.Nombre,
//                    Descripcion = dto.Descripcion
//                };
//                repository.Insert(departamentopost);
//                return Ok(departamentopost);
//            }
//            return BadRequest(result.Errors.Select(x => x.ErrorMessage));
//        }

//        [HttpPut]
//        public IActionResult Put(DepartamentoDTO dto)
//        {
//            DepartamentoValidator validator = new();
//            var result = validator.Validate(dto);
//            if (result.IsValid)
//            {
//                var departamentoresult = repository.Get(dto.Id);
//                if (departamentoresult == null)
//                {
//                    return NotFound();
//                }
//                else
//                {
//                    departamentoresult.Id = dto.Id;
//                    departamentoresult.Nombre = dto.Nombre;
//                    departamentoresult.Descripcion = dto.Descripcion;
//                    repository.Update(departamentoresult);
//                    return Ok();
//                }
//            }
//            return BadRequest(result.Errors.Select(x => x.ErrorMessage));
//        }

//        [HttpDelete("{id}")]
//        public IActionResult Delete(int id)
//        {
//            var departamento = repository.Get(id);
//            if (departamento == null)
//            {
//                return NotFound();
//            }
//            repository.Delete(departamento);
//            return Ok();
//        }
//    }
//}
