﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ECS.DTO
{
    /// <summary>
    /// User account information submitted during registration
    /// </summary>
    public class RegistrationDTO
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Username { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        public string State { get; set; }

        public int ZipCode { get; set; }

        public List<SecurityQuestionDTO> SecurityQuestions { get; set; }
    }
}