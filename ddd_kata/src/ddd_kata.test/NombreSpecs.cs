using Xunit;

namespace ddd_kata.test
{
    public class NombreSpecs
    {
        [Fact]
        public void puedo_crear_un_nombre()
        {
            Nombre.Desde("David Vílchez");
        }
    }
}