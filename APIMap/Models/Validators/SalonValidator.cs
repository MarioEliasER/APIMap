using APIMap.Models.DTO;
using FluentValidation;

namespace APIMap.Models.Validators
{
	public class SalonValidator : AbstractValidator<SalonDTO>
	{
        public SalonValidator()
        {
            RuleFor(x => x.Nombre).NotEmpty().WithMessage("El nombre del salón no puede estar vacío.");
            RuleFor(x => x.Descripcion).NotEmpty().WithMessage("La descripción del salón no puede estar vacía.");
        }
    }
}
