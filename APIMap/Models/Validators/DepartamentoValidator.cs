using APIMap.Models.DTO;
using FluentValidation;

namespace APIMap.Models.Validators
{
	public class DepartamentoValidator : AbstractValidator<DepartamentoDTO>
	{
        public DepartamentoValidator()
        {
            RuleFor(x => x.Nombre).NotEmpty().WithMessage("El nombre del departamento no puede estar vacío.");
            RuleFor(x => x.Descripcion).NotEmpty().WithMessage("La descripción del departamento no puede estar vacía.");
        }
    }
}
