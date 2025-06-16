import { createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { categorias as categoriasDB} from "../data/categorias"
import PropTypes from 'prop-types';
//import clienteAxios from '../config/axios'; 
import axios from 'axios'


const QuioscoContext = createContext();


const QuioscoProvider = ({children}) => {

    // primer valor: lo que voy a usar (nombre del state) y lo otro es para modificarlo
    const [categorias, setCategorias ] =useState([]) ;
    const [categoriaActual, setCategoriaActual] = useState({});
    //el modal empieza en false porque esta cerrado
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({}); 
    const [pedido, setPedido] = useState([]); 
    const [total, setTotal] = useState([0]);

    useEffect(() =>{
        const nuevoTotal= pedido.reduce( (total, producto) => (producto.precio*producto.cantidad) + total, 0)
        setTotal(nuevoTotal)
    },[pedido])

    const obtenerCatageorias = async () => {
        try {
            // console.log(import.meta.env.VITE_API_URL)
            const  {data}  = await axios(`${import.meta.env.VITE_API_URL}/api/categorias`);
            console.log(data.data)
        setCategorias(data.data)
        setCategoriaActual(data.data[0]) // establece la primera categoría como la actual
        } catch (error) {
            console.error('Error al obtener las categorías:', error);
        }
    }

    useEffect(() => {
        obtenerCatageorias();
    }, []);

    const  handleClickCategoria = id => {
        const categoria= categorias.filter(categoria => categoria.id === id)[0]
        setCategoriaActual(categoria)
    }

    const handleClickModal = () => {
        //niega la condicion que ya tenga el modal, si esta abierto la cierra y si esta cerrado lo abre
        setModal(!modal)
    }
    
    const handleSetProducto = producto =>{
        setProducto(producto)
    }
// elimina categoria_id  del objeto producto
    const handleAgregarPedido = ({ ...producto}) => {
      
         if(pedido.some( pedidoState => pedidoState.id === producto.id)){
      const pedidoActualizado= pedido.map(pedidoState => pedidoState.id === producto.id ? producto : pedidoState)
            setPedido(pedidoActualizado)
            toast.success('Guardado correctamente')
    }else{
          setPedido([...pedido, producto])
        toast.success('Agregado al pedido')
    }
       // console.log(producto)
    }

// editar

    const handleEditarCantidad= id =>{
        const productoActualizar =pedido.filter(producto => producto.id === id)[0]
        setProducto(productoActualizar)
        setModal(!modal)
    }

    // eliminar
    const handleEliminarProductoPedido= id =>{
        const pedidoActualizado = pedido.filter(producto => producto.id !==id)
        setPedido(pedidoActualizado)
        toast.success('Eliminado del pedido')
    }
    return (
        <QuioscoContext.Provider 
        value={{
            categorias,
            categoriaActual,
            handleClickCategoria,
            modal,
            handleClickModal,
            producto,
            handleSetProducto,
            pedido,
            handleAgregarPedido,
            handleEditarCantidad,
            handleEliminarProductoPedido,
            total
        }}

        >{children}</QuioscoContext.Provider>
    )
}

export{
    QuioscoProvider
}
export default QuioscoContext;

QuioscoProvider.propTypes = {
    children: PropTypes.node.isRequired,
};