namespace ddd_kata
{
    public class CuentaDeCargo
    {
        private string _cuenta;

        public static CuentaDeCargo Desde(string cuentaDeCargo)
        {
            return new CuentaDeCargo {_cuenta = cuentaDeCargo};
        }
    }
}