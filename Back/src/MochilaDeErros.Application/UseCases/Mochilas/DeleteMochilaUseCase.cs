using MochilaDeErros.Application.Interfaces.Repositories.Write;
using MochilaDeErros.Application.Interfaces.Repositories.Read;

namespace MochilaDeErros.Application.UseCases.Mochilas;

public class DeleteMochilaUseCase
{
    private readonly IMochilaReadRepository _readRepo;
    private readonly IMochilaWriteRepository _writeRepo;

    public DeleteMochilaUseCase(
        IMochilaReadRepository readRepo,
        IMochilaWriteRepository writeRepo
    )
    {
        _readRepo = readRepo;
        _writeRepo = writeRepo;
    }

    public async Task ExecuteAsync(Guid userId, Guid mochilaId)
    {
        var mochila = await _readRepo.GetByIdAsync(mochilaId);

        if (mochila is null)
            throw new Exception("Mochila não encontrada.");

        if (mochila.UsuarioId != userId)
            throw new Exception("Você não tem permissão para excluir essa mochila.");

        await _writeRepo.DeleteAsync(mochila);
        await _writeRepo.SaveChangesAsync();
    }
}