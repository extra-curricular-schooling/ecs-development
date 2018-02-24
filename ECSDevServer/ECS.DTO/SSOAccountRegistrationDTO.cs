﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ECS.DTO
{
    public class SSOAccountRegistrationDTO
    {
        public string Username { get; set; }

        public string Password { get; set; }

        public List<String> SecurityQuestions { get; set; }

        public List<String> SecurityAnswers { get; set; }
    }
}