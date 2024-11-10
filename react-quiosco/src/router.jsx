import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/layout'
import AuthLayout from './layouts/AuthLayout'
import Inicio from './views/Inicio'
import Login from './views/login'
import Registro from './views/Registro'
// permite crear las rutas
const router = createBrowserRouter([
   {
      // al entrar / muestra ese componente de layout, siempre en mayuscula la primera letra
        path: "/",
        element: <Layout />,
        children: [
            {
                 // index true es que cuando se visite auth se carga login dentro de authlogin
               index:true,
               element: <Inicio />
            }
        ]
   },
   {
         path: '/auth',
        element: <AuthLayout />,
        children:[
            {
            //  si se quita index se tiene que crear una ruta para el componente por el path
               path:'/auth/login',
               element: <Login />
            },
            {
               path:'/auth/registro',
               element: <Registro />
            }
        ]
   },

])

export default router
