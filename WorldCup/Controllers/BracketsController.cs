﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WorldCup.Controllers
{
    public class BracketsController : Controller
    {
        // GET: Brackets
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Build()
        {
            return View();
        }
    }
}