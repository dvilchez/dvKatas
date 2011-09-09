namespace ddd_kata
{
    public class Importe
    {
        private decimal _cuantia;

        public static Importe Desde(decimal cuantia)
        {
            return new Importe { _cuantia = cuantia };
        }

        public override bool Equals(object obj)
        {
            return _cuantia.Equals((obj as Importe)._cuantia);
        }

        public override int GetHashCode()
        {
            return _cuantia.GetHashCode();
        }
    }
}
