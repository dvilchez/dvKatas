using Xunit;

namespace ddd_kata.test
{
    public class CargoSpecs
    {
        [Fact]
        public void dado_un_mes_y_un_importe_puedo_crear_un_cargo()
        {
            new Cargo(Mes.Enero,Importe.Desde(1500m));
        }
    }
}