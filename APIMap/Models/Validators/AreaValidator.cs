using APIMap.Models.DTO;
using FluentValidation;

namespace APIMap.Models.Validators
{
	public class AreaValidator : AbstractValidator<AreaDTO>
    {
        public AreaValidator()
        {
            RuleFor(x => x.Nombre).NotEmpty().WithMessage("El nombre del área no puede estar vacío.");
            RuleFor(x => x.Descripcion).NotEmpty().WithMessage("La descripción del área no puede estar vacía.");
        }
    }
}
