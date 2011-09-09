using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using rx2_withrx;

namespace rx1_withevents
{
    public delegate void NextHandler(string name);

    //observable
    public class SpanishNamesFeeder:NamesFeeder
    {
        public SpanishNamesFeeder()
        {
            base.names=new List<string> { "David", "Jesus", "Juan", "María" };
        }
    }
}
