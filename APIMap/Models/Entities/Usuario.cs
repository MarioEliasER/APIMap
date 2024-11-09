using System;
using System.Collections.Generic;

namespace APIMap.Models.Entities;

public partial class Usuario
{
    public int Id { get; set; }

    public string Nombreusuario { get; set; } = null!;

    public string Contraseña { get; set; } = null!;
}
