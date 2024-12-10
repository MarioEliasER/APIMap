using System;
using System.Collections.Generic;

namespace APIMap.Models.Entities;

public partial class Ubicacion
{
    public int Id { get; set; }

    public string Nombre { get; set; } = null!;

    public string Area { get; set; } = null!;

    public string Descripcion { get; set; } = null!;
}
