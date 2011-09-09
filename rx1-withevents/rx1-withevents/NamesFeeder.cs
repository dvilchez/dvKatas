using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;

namespace rx1_withevents
{
    public class NamesFeeder
    {
        public event NextHandler Next;
        protected List<string> names;

        public void Search(object state)
        {
            foreach (var name in names)
            {
                Next(name);
                Thread.Sleep(1000);
            }
        }

        public void Lanzar()
        {
            ThreadPool.QueueUserWorkItem(Search);
        }
    }
}
