using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace rx1_withevents
{
    public class EnglishNamesFeeder:NamesFeeder
    {
        public EnglishNamesFeeder()
        {
            base.names = new List<string> { "Mark", "Charlie", "John", "Peter" };
        }
    }
}
