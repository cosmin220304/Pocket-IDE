using System.Threading.Tasks;

namespace PocketIDE.Services.FormRecognizerService
{
    public interface IFormRecognizer
    {
        Task<string> GetTextAsync(string imgUrl);
    }
}
