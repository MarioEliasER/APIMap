using APIMap.Models.Entities;
using Microsoft.EntityFrameworkCore;
using APIMap.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

var connection = builder.Configuration.GetConnectionString("apimap");
builder.Services.AddDbContext<WebsitosApimapContext>(x =>
x.UseMySql(connection, ServerVersion.AutoDetect(connection)));

builder.Services.AddScoped(typeof(Repository<>));
builder.Services.AddTransient<UbicacionRepository>();
builder.Services.AddTransient<UsuarioRepository>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle


builder.Services.AddControllers();
builder.Services.AddRazorPages();
var app = builder.Build();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
//	app.UseSwagger();
//	app.UseSwaggerUI();
//}

app.UseDeveloperExceptionPage();

app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
app.UseHttpsRedirection();

app.UseAuthorization();
app.UseStaticFiles();
app.MapRazorPages();

app.MapControllers();

app.Run();
