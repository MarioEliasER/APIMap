using APIMap.Models.DTO;
using FluentValidation;

namespace APIMap.Models.Validators
{
	public class EdificioValidator : AbstractValidator<EdificioDTO>
	{
        public EdificioValidator()
        {
            RuleFor(x => x.Nombre).NotEmpty().WithMessage("El nombre del edificio no puede estar vacío.");
            RuleFor(x => x.Descripcion).NotEmpty().WithMessage("La descripción del edificio no puede estar vacía.");
        }
    }
}
