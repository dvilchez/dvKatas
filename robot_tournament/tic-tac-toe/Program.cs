using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace tic_tac_toe
{
    class Program
    {
        static void Main(string[] args)
        {
            var pos = 0;
            var movimiento = args[0].IndexOf('-');
            string tablero = args[0];

            char ult=new char();

            for (int i = 0; i < tablero.Length;i++ )
            {

                if (tablero[i] == ult)
                {
                    movimiento = i + 1;
                    break;
                }
                ult = tablero[i];
            }
            
        
            Console.Write(movimiento);
        }
    }
}
