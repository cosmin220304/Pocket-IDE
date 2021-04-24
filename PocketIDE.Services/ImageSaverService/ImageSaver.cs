using Newtonsoft.Json;
using PocketIDE.Services.ImageSaverService.Dtos;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace PocketIDE.Services.ImageSaverService
{
    public class ImageSaver : IImageSaver
    {
        private readonly HttpClient imgbbClient;
        public static string ImgbbApiKey;

        public ImageSaver()
        {
            imgbbClient = new HttpClient
            {
                BaseAddress = new Uri("https://api.imgbb.com")
            };
            imgbbClient.DefaultRequestHeaders.Accept.Clear();
            imgbbClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        }

        public async Task<string> SaveAndGetLocation(string base64Image)
        {
            var imgbbPostResult = await imgbbClient.PostAsync($"/1/upload?key={ImgbbApiKey}",
               new FormUrlEncodedContent(new[]
                {
                    new KeyValuePair<string, string>("image", base64Image)
                })
            );
            var imgbbModelString = await imgbbPostResult.Content.ReadAsStringAsync();
            var imgbbModel = JsonConvert.DeserializeObject<ImgbbDto>(imgbbModelString);
            var imgUrl = imgbbModel.data.url;

            return imgUrl;
        }
    }
}
