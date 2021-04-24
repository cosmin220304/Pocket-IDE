using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PocketIDE.Services.FormRecognizerService;
using PocketIDE.Services.ImageSaverService;

namespace PocketIDE.Services.Infrastructure
{
    public static class DependencyInjection
    {
        public static void AddServices(IServiceCollection services, IConfiguration configuration)
        {
            services.AddSingleton<IFormRecognizer, FormRecognizer>();
            FormRecognizer.OcpApimSubscriptionKey = configuration["Secrets:OcpApimSubscriptionKey"];
            services.AddSingleton<IImageSaver, ImageSaver>();
        }
    }
}
