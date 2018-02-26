﻿using System.IO;
using System.Web;

/// <summary>
/// 
/// </summary>
/// <remarks>Author: Scott Roberts</remarks>
namespace ECS.WebAPI.Services
{
    public static class ParseHttpService
    {
        public static string ReadHttpPostBody(HttpRequestBase requestBase)
        {
            Stream req = requestBase.InputStream;
            req.Seek(0, SeekOrigin.Begin);
            return new StreamReader(req).ReadToEnd();
        }

        // Adds the deserialization step to the parsing... Not sure if this breaks single responsibility
        public static T ReadJsonFromPost<T>(HttpRequestBase requestBase)
        {
            Stream req = requestBase.InputStream;
            req.Seek(0, SeekOrigin.Begin);
            var json = new StreamReader(req).ReadToEnd();
            return JsonConverterService.DeserializeObject<T>(json);
        }
    }
}