using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using rx1_withevents;

namespace rx2_withrx
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("with rx");
            new NamesObserver();
            Console.ReadLine();
        }
    }
}
