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
//    public class SalonController : ControllerBase
//    {
//        private readonly SalonRepository repository;

//        public SalonController(SalonRepository repository)
//        {
//            this.repository = repository;
//        }

//        [HttpGet]
//        public IActionResult Get(int id)
//        {
//            var salon = repository.Get(id);
//            if (salon == null)
//            {
//                return NotFound();
//            }

//            var salondto = new SalonDTO
//            {
//                Id = salon.Id,
//                Nombre = salon.Nombre,
//                Descripcion = salon.Descripcion
//            };
//            return Ok(salondto);
//        }

//        [HttpPost]
//        public IActionResult Post(SalonDTO dto)
//        {
//            SalonValidator validator = new();
//            var result = validator.Validate(dto);
//            if (result.IsValid)
//            {
//                Salon salon = new()
//                {
//                    Id = dto.Id,
//                    Nombre = dto.Nombre,
//                    Descripcion = dto.Descripcion
//                };
//                repository.Insert(salon);
//                return Ok(salon);
//            }
//            return BadRequest(result.Errors.Select(x => x.ErrorMessage));
//        }

//        [HttpPut]
//        public IActionResult Put(SalonDTO dto)
//        {
//            SalonValidator validator = new();
//            var result = validator.Validate(dto);
//            if (result.IsValid)
//            {
//                var salonresult = repository.Get(dto.Id);
//                if (salonresult == null)
//                {
//                    return NotFound();
//                }
//                else
//                {
//                    salonresult.Id = dto.Id;
//                    salonresult.Nombre = dto.Nombre;
//                    salonresult.Descripcion = dto.Descripcion;
//                    repository.Update(salonresult);
//                    return Ok();
//                }
//            }
//            return BadRequest(result.Errors.Select(x => x.ErrorMessage));
//        }

//        [HttpDelete("{id}")]
//        public IActionResult Delete(int id)
//        {
//            var salon = repository.Get(id);
//            if (salon == null)
//            {
//                return NotFound();
//            }
//            repository.Delete(salon);
//            return Ok();
//        }
//    }
//}
