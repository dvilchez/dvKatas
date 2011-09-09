using System;
using Xunit;

namespace ddd_kata.test
{
    public class CuentaDeCargoSpecs
    {
        [Fact]
        public void puedo_crear_cuenta_de_cargo()
        {
            CuentaDeCargo.Desde("12345678901234567890");
        }
    }
}