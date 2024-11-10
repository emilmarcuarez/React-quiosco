import { productos } from '../data/productos'
import Producto from '../components/Producto'
import useQuiosco from '../hooks/useQuiosco.js'

export default function Inicio() {
// cualquier funcion que esta en value en QuioscoProvider
  const { categoriaActual } =useQuiosco()

   
  return (
    <>
    
      <h1 className='text-4xl font-black'>{categoriaActual.nombre}</h1>
      <p className='text-2xl'>
        Elige y personaliza tu pedido a continuacion
      </p>

      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {productos.map(producto => (
          <Producto
            key={producto.id}
            producto={producto}
          />
        ))}
      </div>
    </>
  )
}
