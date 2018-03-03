﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace ECS.Modules.HttpModules
{
    public class OptionsModule : IHttpModule
    {
        public void Dispose()
        {
        }

        public void Init(HttpApplication context)
        {
            context.BeginRequest += new EventHandler(OnPreflightRequest);
            //context.BeginRequest += new EventHandler(OnPostRequest);
        }

        private void OnPreflightRequest(object sender, EventArgs e)
        {
            // Cast the sender as an HttpApplication
            var app = sender as HttpApplication;

            // Make a list of accepted referrer sources.
            var acceptedReferrerUrls = new List<string>{
                "http://localhost:8080/",
                "https://www.ecschooling.org/",
                "https://sso.seniorproject.com/"
            };

            // && acceptedReferrerUrls.Contains(app.Request.UrlReferrer.ToString())

            if (app.Request.HttpMethod == "OPTIONS")
            {
                app.Response.StatusCode = 200;
                app.Response.AddHeader("Access-Control-Allow-Headers",
                    "Access-Control-Allow-Origin," +
                    "Access-Control-Allow-Credentials," +
                    "origin," +
                    "accept," +
                    "content-type," +
                    "referer," +
                    "X-Requested-With");
                app.Response.AddHeader("Access-Control-Allow-Origin", "http://localhost:8080");
                app.Response.AddHeader("Access-Control-Allow-Credentials", "true");
                app.Response.AddHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS,PUT");
                app.Response.AddHeader("Content-Type", "application/json");
                app.Response.End();
            }
        }
    }
}