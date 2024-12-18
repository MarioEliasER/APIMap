using APIMap.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using APIMap.Repositories;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Text;
using APIMap.Helpers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

var connection = builder.Configuration.GetConnectionString("apimap");
builder.Services.AddDbContext<WebsitosApimapContext>(x =>
x.UseMySql(connection, ServerVersion.AutoDetect(connection)));

builder.Services.AddScoped(typeof(Repository<>));
builder.Services.AddTransient<UbicacionRepository>();
builder.Services.AddTransient<UsuarioRepository>();
builder.Services.AddSingleton<JwtHelper>();

builder.Services.AddControllers();
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(x =>
{
    var issuer = builder.Configuration.GetSection("JwtBearer").GetValue<string>("Issuer");
    var audience = builder.Configuration.GetSection("JwtBearer").GetValue<string>("Audience");
    var secret = builder.Configuration.GetSection("JwtBearer").GetValue<string>("Secret");

    x.TokenValidationParameters = new()
    {
        ValidIssuer = issuer,
        ValidAudience = audience,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secret ?? "")),
        ValidateLifetime = true
    };
});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddRazorPages();
var app = builder.Build();

//Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseDeveloperExceptionPage();

app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();
app.UseStaticFiles();
app.MapRazorPages();

app.MapControllers();

app.Run();
