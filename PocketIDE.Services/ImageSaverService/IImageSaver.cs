using System.Threading.Tasks;

namespace PocketIDE.Services.ImageSaverService
{
    public interface IImageSaver
    {
        Task<string> SaveAndGetLocation(string base64Image);
    }
}
