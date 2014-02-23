using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace StackKata
{
    /// <summary>
    /// Summary description for SubstringSearch
    /// </summary>
    [TestClass]
    public class SubstringSearch
    {
        [TestMethod]
        public void SearchACharacaterInAString()
        {
            String str="abate";
            Assert.IsTrue(Contains(str,"a"));
        }

        [TestMethod]
        public void SearchACharactersInAStringInAnyPosition()
        {
            String str="abate";
            Assert.IsTrue(Contains(str,"b"));
        }

        [TestMethod]
        public void SearchConsecutiveCharactersInAString()
        {
            string str="abate";
            Assert.IsTrue(Contains(str,"ba"));
        }

        [TestMethod]
        public void SearchConsecutiveCharactersInAString2()
        {
            string str = "abate";
            Assert.IsFalse(Contains(str,"ca"));
        }

        [TestMethod]
        public void SearchConsecutiveCharactersInAString3()
        {
            string str = "abate";
            Assert.IsTrue(Contains(str, "te"));
        }

        [TestMethod]
        public void Bug_SearchAtTheEndOfString()
        {
            string str = "abate";
            Assert.IsFalse(Contains(str,"ed"));
        }

        private bool Contains(string str, string s)
        {
            for (int i = 0; i < str.Length; i++)
            {
                int j;
                for (j = 0; j < s.Length && i+j<str.Length; j++)
                {
                    if (str[i + j] != s[j])
                        break;
                }
                if (j == s.Length) return true;
            }
            return false;
        }
    }
}
