using APIMap.Models.DTO;
using FluentValidation;

namespace APIMap.Models.Validators
{
    public class UbicacionValidator : AbstractValidator<UbicacionDTO>
    {
        public UbicacionValidator()
        {
            RuleFor(x => x.Nombre).NotEmpty().WithMessage("El nombre no puede estar vacío.");
            RuleFor(x => x.Descripcion).NotEmpty().WithMessage("La descripción no puede estar vacía.");
            RuleFor(x => x.Area).NotEmpty().WithMessage("El área no puede estar vacía.")
                                .Must(area => new[] { "Edificios", "Salones", "Laboratorios", "Departamentos", "Áreas Comunes" }
                                .Contains(area))
                                .WithMessage("El área debe ser una de las opciones válidas.");
        }
    }
}
