using MochilaDeErros.Domain.Entities;

namespace MochilaDeErros.Application.Interfaces.Repositories.Write;

public interface IMochilaWriteRepository
{
    Task AddAsync(Mochila mochila);
    Task DeleteAsync(Mochila mochila);
    Task SaveChangesAsync();
}