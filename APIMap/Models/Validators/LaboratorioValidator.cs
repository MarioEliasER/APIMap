using APIMap.Models.DTO;
using FluentValidation;

namespace APIMap.Models.Validators
{
	public class LaboratorioValidator : AbstractValidator<LaboratorioDTO>
	{
        public LaboratorioValidator()
        {
            RuleFor(x => x.Nombre).NotEmpty().WithMessage("El nombre del laboratorio no puede estar vacío.");
            RuleFor(x => x.Descripcion).NotEmpty().WithMessage("La descripción del laboratorio no puede estar vacía.");
        }
    }
}
