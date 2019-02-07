﻿using System;
using System.Collections.Generic;
using System.Text;
namespace BusinessObjects.Common
{
    public class Config
    {
        public string KeyText { get; set; }
        public string ValueText { get; set; }
        public bool Active { get; set; }
        public DateTime Created_Date { get; set; }
        public DateTime Updated_Date { get; set; }
    }
}
