using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;

namespace rx2_withrx
{
    public class NamesFeeder : IObservable<string>
    {
        List<IObserver<string>> observers = new List<IObserver<string>>();
        protected List<string> names;

        public IDisposable Subscribe(IObserver<string> observer)
        {
            observers.Add(observer);
            ThreadPool.QueueUserWorkItem(Search);
            return new UnsubscribeWrapper(observer, UnsubscribeAction);
        }

        private void UnsubscribeAction(IObserver<string> observer)
        {
            observers.Remove(observer);
        }

        public void Search(object state)
        {
            foreach (var name in names)
            {
                foreach (var observer in observers)
                {
                    observer.OnNext(name);
                    Thread.Sleep(1000);
                }
            }
        }
    }

    #region Documentation
    /// <summary>
    /// Nested disposable type that will return from the IObservable Subscribe method
    /// </summary>
    #endregion // Documentation
    class UnsubscribeWrapper : IDisposable
    {
        #region Private / Protected Fields

        private IObserver<string> _observer;
        private Action<IObserver<string>> _disposeCallback;

        #endregion // Private / Protected Fields

        #region Constructors

        #region Documentation
        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="observer">the subscribed observer</param>
        /// <param name="disposeCallback">disposal callback</param>
        #endregion // Documentation
        public UnsubscribeWrapper(IObserver<string> observer, Action<IObserver<string>> disposeCallback)
        {
            _observer = observer;
            _disposeCallback = disposeCallback;
        }

        #endregion // Constructors

        #region IDisposable Members

        #region Documentation
        /// <summary>
        /// disposal action
        /// </summary>
        #endregion // Documentation
        public void Dispose()
        {
            _disposeCallback(_observer);
        }

        #endregion
    }
}
