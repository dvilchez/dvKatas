using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using rx1_withevents;
using System.Threading;

namespace rx2_withrx
{
    public class NamesObserver:IObserver<string>
    {
        public NamesObserver()
        {
            var spanishNames = new SpanishNamesFeeder();
            spanishNames.Subscribe(this);
            var englishNames = new EnglishNamesFeeder();
            englishNames.Subscribe(this);
        }

        public void OnCompleted()
        {
            //throw new NotImplementedException();
        }

        public void OnError(Exception error)
        {
            //throw new NotImplementedException();
        }

        public void OnNext(string value)
        {
            Console.WriteLine(string.Format("{0}-{1}",Thread.CurrentThread.ManagedThreadId, value));
        }
    }
}
