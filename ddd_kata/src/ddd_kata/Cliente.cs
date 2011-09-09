using System;
using System.Collections.Generic;
using System.Linq;

namespace ddd_kata
{
    public class Cliente
    {
        private CuentaDeCargo _cuentaDeCargo;
        private Nombre _nombre;
        private IList<Cargo> _cargos;

        public Cliente(Nombre nombre, CuentaDeCargo cuentaDeCargo)
        {
            _nombre = nombre;
            _cuentaDeCargo = cuentaDeCargo;
            _cargos=new List<Cargo>();
        }

        public Cargo ObtenerCargo(Mes mes)
        {
            return _cargos.Where(c => c.Mes == mes).SingleOrDefault();
        }

        public void AnhadirCargo(Cargo cargo)
        {
            throw new NotImplementedException();
        }
    }
}