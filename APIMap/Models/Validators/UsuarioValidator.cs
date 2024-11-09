using APIMap.Models.DTO;
using APIMap.Models.Entities;
using FluentValidation;

namespace APIMap.Models.Validators
{
	public class UsuarioValidator : AbstractValidator<UsuarioDTO>
	{
		public UsuarioValidator()
		{
			RuleFor(x => x.Username).NotEmpty().WithMessage("El nombre de usuario no puede estar vacío.");
			RuleFor(x => x.Password).NotEmpty().WithMessage("La contraseña del usuario no puede estar vacía.");
		}
	}
}
