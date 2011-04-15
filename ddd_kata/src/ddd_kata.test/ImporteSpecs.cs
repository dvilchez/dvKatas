using Xunit;

namespace ddd_kata.test
{
    public class ImporteSpecs
    {
        [Fact]
        public void dado_un_decimal_puedo_crear_un_importe()
        {
            Importe.Desde(1.10m);
        }

        [Fact]
        public void dos_importes_son_iguales_si_la_cuantia_es_igual()
        {
            Assert.Equal(Importe.Desde(123m), Importe.Desde(123m));
        }
    }
}