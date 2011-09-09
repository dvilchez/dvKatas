using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace ddd_kata
{
    public class Gimnasio
    {
        private Importe _importeCuotaMensual;
        private IList<Cliente> _clientes;
        private Nombre _nombre;

        public Gimnasio(Nombre nombre, Importe cuota)
        {
            _nombre = nombre;
            _importeCuotaMensual = cuota;
            _clientes=new List<Cliente>();
        }

        public virtual Importe ImporteCuotaMensual
        {
            get { return _importeCuotaMensual; }
        }

        public ICollection<Cliente> Clientes
        {
            get {
                return new ReadOnlyCollection<Cliente>(_clientes);
            }
        }

        public void AnhadirCliente(Cliente cliente)
        {
            _clientes.Add(cliente);
        }

        public void GenerarCargos(Mes mes)
        {
            foreach (var cliente in Clientes)
            {
                cliente.AnhadirCargo(new Cargo(mes, ImporteCuotaMensual));
                
            }
        }
    }
}