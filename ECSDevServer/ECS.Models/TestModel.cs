﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ECS.Models
{
    public class TestModel
    {
        [Required, Key]
        public string username { get; set; }
    }
}