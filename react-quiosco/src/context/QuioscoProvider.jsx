import { createContext, useState } from 'react'
import { categorias as categoriasDB} from "../data/categorias"
import PropTypes from 'prop-types';


const QuioscoContext = createContext();


const QuioscoProvider = ({children}) => {

    // primer valor: lo que voy a usar (nombre del state) y lo otro es para modificarlo
    const [categorias, setCategorias ] =useState(categoriasDB) ;
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
    //el modal empieza en false porque esta cerrado
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({}); 
    const [pedido, setPedido] = useState([]); 

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
// elimina categoria_id e imagen del objeto producto
    const handleAgregarPedido = ({categoria_id, imagen, ...producto}) => {
        setPedido([...pedido, producto])
       // console.log(producto)
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
            handleAgregarPedido
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