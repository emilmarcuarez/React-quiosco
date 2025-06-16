// import { productos as data} from '../data/productos'
import useSWR from 'swr'
import Producto from '../components/Producto'
import useQuiosco from '../hooks/useQuiosco.js'
import axios from 'axios'
export default function Inicio() {
// cualquier funcion que esta en value en QuioscoProvider
  const { categoriaActual } =useQuiosco()

  // CONSILTA SWR
  const fetcher = () => axios(`${import.meta.env.VITE_API_URL}/api/productos`).then(data => data.data);
  const {data,error,isLoading} = useSWR('/api/productos', fetcher,{
    refreshInterval: 1000  // cada minuto
  })
console.log(data)
console.log(error)
console.log(isLoading)
  if(isLoading) return 'Cargando...'

  //filter sirve para filtrar la informacion en base a la categoria
  const productos = data.data.filter(producto => producto.categoria_id === categoriaActual.id )
  

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
