using System;
using Xunit;

namespace ddd_kata.test
{
    public class ClienteSpecs
    {
        [Fact]
        public void puedo_crear_un_cliente()
        {
            new Cliente(Nombre.Desde("David Vílchez"), CuentaDeCargo.Desde("12345678901234567890"));
        }

        [Fact]
        public void un_cliente_nuevo_no_tiene_cargos()
        {
            var cliente = new Cliente(Nombre.Desde("David Vílchez"), CuentaDeCargo.Desde("1234567890"));
            
            var cargo = cliente.ObtenerCargo(Mes.Enero);

            Assert.Null(cargo);
        }
    }
}