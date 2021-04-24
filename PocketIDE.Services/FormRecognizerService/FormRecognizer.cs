using Newtonsoft.Json;
using PocketIDE.Services.FormRecognizerService.Dtos;
using System;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace PocketIDE.Services.FormRecognizerService
{
    public class FormRecognizer : IFormRecognizer
    {
        private readonly HttpClient formRecognizerClient;
        public static string OcpApimSubscriptionKey;

        public FormRecognizer()
        {
            formRecognizerClient = new HttpClient
            {
                BaseAddress = new Uri("https://reco.cognitiveservices.azure.com")
            };
            formRecognizerClient.DefaultRequestHeaders.Accept.Clear();
            formRecognizerClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            formRecognizerClient.DefaultRequestHeaders.Add("Ocp-Apim-Subscription-Key", OcpApimSubscriptionKey);
        }

        public async Task<string> GetTextAsync(string imgUrl)
        {
            var formRecognizerJson = JsonConvert.SerializeObject(new FormRecognizePostDto
            {
                source = imgUrl
            });

            var formRecognizerPostResult = await formRecognizerClient.PostAsync(
                "/formrecognizer/v2.1-preview.3/layout/analyze",
                new StringContent(formRecognizerJson, Encoding.UTF8, "application/json")
            );
            var fullUrlLocation = formRecognizerPostResult.Headers.GetValues("Operation-Location").FirstOrDefault();
            var path = fullUrlLocation.Split(new string[] { "https://reco.cognitiveservices.azure.com" }, StringSplitOptions.None)[1];

            Thread.Sleep(5000);
            var recognizedTextResponse = await formRecognizerClient.GetAsync(path);
            var text = await recognizedTextResponse.Content.ReadAsStringAsync();
            return text;
        }
    }
}
