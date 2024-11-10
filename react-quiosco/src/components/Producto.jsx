import { formatearDinero } from "../helpers"
import PropTypes from 'prop-types';



export default function Producto({ producto }) {
    const { nombre, imagen, precio } = producto

  return (

        <div className='border p-3 shadow bg-white'>
            <img 
            src={`/img/${imagen}.jpg`} 
            className="w-full"
            alt={`imagen ${nombre}`} 
            />
       

            <div className='p-5'>
                <h3 className='text-2xl font-bold'>{nombre}</h3>
                <p className='mt-5 font-black text-4xl text-amber-500'>
                    { formatearDinero(precio) }
                </p>

                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold rounded-md"
                >
                    Agregar
                </button>
            </div>

        </div>
  )
}

Producto.propTypes = {
    producto : PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        imagen: PropTypes.string.isRequired,
        precio: PropTypes.string.isRequired
    }).isRequired,
};
