namespace ddd_kata
{
    public class Cargo
    {
        private readonly Mes _mes;
        private readonly Importe _importe;

        public Cargo(Mes mes, Importe importe)
        {
            _mes = mes;
            _importe = importe;
        }

        public Mes Mes
        {
            get { return _mes; }
        }
    }
}