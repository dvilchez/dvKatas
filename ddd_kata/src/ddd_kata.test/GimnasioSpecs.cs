using System;
using Moq;
using Xunit;

namespace ddd_kata.test
{
    public class GimnasioSpecs
    {
        private Gimnasio gimnasio;
        private Cliente cliente;

        public GimnasioSpecs()
        {
            gimnasio= new Gimnasio(Nombre.Desde("Gimnasio A"), Importe.Desde(35m));
            cliente = new Cliente(Nombre.Desde("Nombre nombre"), CuentaDeCargo.Desde("12345678912345678900"));
        }

        [Fact]
        public void puedo_anhadir_un_cliente_al_gimnasio()
        {
            var numeroClientes = gimnasio.Clientes.Count;

            gimnasio.AnhadirCliente(cliente);

            Assert.Equal(numeroClientes+1,gimnasio.Clientes.Count);
        }

        [Fact(Skip="cliente puede anhadir cargo")]
        public void puedo_generar_cargos_mensuales_a_los_clientes_del_gimnasio()
        {
            //TODO: como agrego un cliente al gimnasio sin usar el metodo anhadircliente
            gimnasio.AnhadirCliente(cliente);
            Assert.Null(cliente.ObtenerCargo(Mes.Enero));
            
            gimnasio.GenerarCargos(Mes.Enero);

            Assert.NotNull(cliente.ObtenerCargo(Mes.Enero));
        }

        [Fact(Skip="por ahora")]
        public void no_se_puede_generar_un_cargo_repetido()
        {
            
        }
    }
}