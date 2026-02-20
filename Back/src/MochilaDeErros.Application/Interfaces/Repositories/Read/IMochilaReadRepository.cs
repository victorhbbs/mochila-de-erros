using MochilaDeErros.Application.DTOs.Mochilas;
using MochilaDeErros.Domain.Entities;

namespace MochilaDeErros.Application.Interfaces.Repositories.Read;

public interface IMochilaReadRepository
{

    Task<bool> ExistsByUserAsync(Guid userId, Guid mochilaId);
    Task<List<MochilaCardDto>> GetCardsByUserIdAsync(Guid userId);
    Task<Mochila?> GetByIdAsync(Guid mochilaId);
}