//using APIMap.Models.DTO;
//using APIMap.Models.Entities;
//using APIMap.Models.Validators;
//using APIMap.Repositories;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;

//namespace APIMap.Controllers
//{
//	[Route("api/[controller]")]
//	[ApiController]
//	public class AreaController : ControllerBase
//	{
//		private readonly AreaRepository repository;

//		public AreaController(AreaRepository repository)
//		{
//			this.repository = repository;
//		}

//		[HttpGet]
//		public IActionResult Get(int id)
//		{
//			var area = repository.Get(id);
//			if (area == null)
//			{
//				return NotFound();
//			}

//			var areadto = new AreaDTO
//			{
//				Id = area.Id,
//				Nombre = area.Nombre,
//				Descripcion = area.Descripcion
//			};
//			return Ok(areadto);
//		}

//		[HttpPost]
//		public IActionResult Post(AreaDTO dto)
//		{
//			AreaValidator validator = new();
//			var result = validator.Validate(dto);
//			if (result.IsValid)
//			{
//				Area areapost = new()
//				{
//					Id = dto.Id,
//					Nombre = dto.Nombre,
//					Descripcion = dto.Descripcion
//				};
//				repository.Insert(areapost);
//				return Ok(areapost);
//			}
//			return BadRequest(result.Errors.Select(x => x.ErrorMessage));
//		}

//		[HttpPut]
//		public IActionResult Put(AreaDTO dto)
//		{
//			AreaValidator validator = new();
//			var result = validator.Validate(dto);
//			if (result.IsValid)
//			{
//				var arearesult = repository.Get(dto.Id);
//				if (arearesult == null)
//				{
//					return NotFound();
//				}
//				else
//				{
//					arearesult.Id = dto.Id;
//					arearesult.Nombre = dto.Nombre;
//					arearesult.Descripcion = dto.Descripcion;
//					repository.Update(arearesult);
//					return Ok();
//				}
//			}
//			return BadRequest(result.Errors.Select(x => x.ErrorMessage));
//		}

//		[HttpDelete("{id}")]
//		public IActionResult Delete(int id)
//		{
//			var area = repository.Get(id);
//			if (area == null)
//			{
//				return NotFound();
//			}
//			repository.Delete(area);
//			return Ok();
//		}
//	}
//}
