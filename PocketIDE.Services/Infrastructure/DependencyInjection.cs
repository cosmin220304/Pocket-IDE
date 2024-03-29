﻿using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PocketIDE.Services.FormRecognizerService;
using PocketIDE.Services.ImageSaverService;

namespace PocketIDE.Services.Infrastructure
{
    public static class DependencyInjection
    {
        public static void AddServices(IServiceCollection services, IConfiguration configuration)
        {
            FormRecognizer.OcpApimSubscriptionKey = configuration["Secrets:OcpApimSubscriptionKey"];
            ImageSaver.ImgbbApiKey = configuration["Secrets:ImgbbApiKey"];
            services.AddSingleton<IFormRecognizer, FormRecognizer>();
            services.AddSingleton<IImageSaver, ImageSaver>();
        }
    }
}
