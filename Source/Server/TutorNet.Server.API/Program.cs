using Microsoft.EntityFrameworkCore;
using TutorNet.Server.API.Data;

var builder = WebApplication.CreateBuilder(args);

#region Configure_Services

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

if (builder.Environment.IsProduction())
{
    Console.WriteLine($">[EnvMode] Starting {builder.Environment.EnvironmentName} Mode\n>[DBConf]  Using SQL Server Database");
    //TODO: Implement Database Service for Production Enviroment
    throw new NotImplementedException();
}
else
{
    Console.WriteLine(">[EnvMode] Starting Development Mode\n>[DBConf]  Using In Memory Database");

    builder.Services.AddDbContext<AppDbContext>(opt =>
            opt.UseInMemoryDatabase("InMem")
    );
}

#endregion

var app = builder.Build();

#region App_Configure

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

PrepDb.PrepPopulation(app, builder.Environment.IsProduction());

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

#endregion