using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PocketIDE.Services.FormRecognizerService;
using PocketIDE.Services.ImageSaverService;
using PocketIDE.Web.ViewModel;

namespace PocketIDE.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AzureRecoController : ControllerBase
    {
        private readonly ILogger<AzureRecoController> _logger;
        private readonly IImageSaver _imageSaver;
        private readonly IFormRecognizer _formRecognizer;

        public AzureRecoController(ILogger<AzureRecoController> logger, IImageSaver imageSaver, IFormRecognizer formRecognizer)
        {
            _logger = logger;
            _imageSaver = imageSaver;
            _formRecognizer = formRecognizer;
        }

        [HttpPost]
        public async Task<string> Index(AzureRecoViewModel azureRecoViewModel)
        {
            try
            {
                var imageUrl = await _imageSaver.SaveAndGetLocation(azureRecoViewModel.Image);
                return await _formRecognizer.GetTextAsync(imageUrl);
            }
            catch(Exception exception)
            {
                _logger.LogTrace(exception.Message);
                return "";
            }
        }
    }
}
