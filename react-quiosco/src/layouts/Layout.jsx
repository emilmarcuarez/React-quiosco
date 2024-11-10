// el outlet permite mostrar ahi los children que se declaran en el router.jsx
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar'
import Resumen from '../components/Resumen'

export default function Layout() {
  return (
    <div className='md:flex'>
      
      <Sidebar />

    <main className='flex-1 h-screen overflow-y-scroll bg-gray-100 p-3'>
      <Outlet />

    </main>
     

      <Resumen />

    </div>
  )
}
