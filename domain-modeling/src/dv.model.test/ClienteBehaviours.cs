using System;
using Xunit;

namespace dv.model.test
{
    public class ClienteBehaviours
    {
        [Fact]
        public void puedo_crear_un_cliente()
        {
            var cliente = new Cliente(1);
        }

        [Fact(Skip="later")]
        public void puedo_obtener_un_cliente()
        {
            
        }
    }

    public class Cliente
    {
        private int _numeroCliente;

        public Cliente(int numeroCliente)
        {
            _numeroCliente = numeroCliente;
        }
    }
}