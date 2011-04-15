namespace ddd_kata
{
    public class Nombre
    {
        private  string _nombre;
        private string _apellidos;

        public static Nombre Desde(string nombre)
        {
            var partesNombre = nombre.Split(' ');
            return new Nombre{_nombre=partesNombre[0],_apellidos=partesNombre[1]};
        }
    }
}