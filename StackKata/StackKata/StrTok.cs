using System.Collections.Generic;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace StackKata
{
    /// <summary>
    /// Summary description for StrTok
    /// </summary>
    [TestClass]
    public class StrTok
    {
        [TestMethod]
        public void ReturnStringIfTokenIsNotPresent()
        {
            string str="tachan";
            char token=' ';

            var res = strtok(str, token).ToArray();

            Assert.AreEqual(1, res.Length);
            Assert.AreEqual(str, res[0]);
        }

        [TestMethod]
        public void ReturnSubStringSeparatedByToken()
        {
            char token=' ';
            string str="Hello World!";

            var res = strtok(str, token).ToArray();
            
            Assert.AreEqual(2, res.Length);
            Assert.AreEqual("Hello", res[0]);
            Assert.AreEqual("World!", res[1]);
        }

        [TestMethod]
        public void ReturnSubStringSeparatedByToken2()
        {
            char token = ' ';
            string str = "Lorem Ipsum is simply dummy text of the printing and typesetting";

            var res = strtok(str, token).ToArray();

            Assert.AreEqual(11, res.Length);
            Assert.AreEqual("is", res[2]);
            Assert.AreEqual("printing", res[8]);
        }

        private IEnumerable<string> strtok(string str, char token)
        {
            var token_positions = MakePositionLst(str, token).ToArray();

            for (int i = 0; i < token_positions.Count()-1; i++)
            {
                yield return str.Substring(token_positions[i], token_positions[i + 1] - token_positions[i]-1);
            }
        }

        private IEnumerable<int> MakePositionLst(string str, char token)
        {
            yield return 0;
            for (int i = 0; i < str.Length; i++)
            {
                if (str[i] == token)
                    yield return i+1;
            }
            yield return str.Length+1;

        }
    }
}
