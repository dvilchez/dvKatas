using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;

namespace rx1_withevents
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("with events");
            //suscripción a eventos
            var spanishNames = new SpanishNamesFeeder();
            spanishNames.Next += new NextHandler(processNames_Next);
            spanishNames.Lanzar();

            var englishNames = new EnglishNamesFeeder();
            englishNames.Next += new NextHandler(processNames_Next);
            englishNames.Lanzar();

            Console.ReadLine();
        }

        static void processNames_Next(string name)
        {
            Console.WriteLine(String.Format("{0}-{1}",Thread.CurrentThread.ManagedThreadId, name));
        }
    }
}
