import { createContext, useState } from 'react'
import { categorias as categoriasDB} from "../data/categorias"
import PropTypes from 'prop-types';


const QuioscoContext = createContext();


const QuioscoProvider = ({children}) => {

    // primer valor: lo que voy a usar (nombre del state) y lo otro es para modificarlo
    const [categorias, setCategorias ] =useState(categoriasDB) ;
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);

     
    const  handleClickCategoria = id => {
        const categoria= categorias.filter(categoria => categoria.id === id)[0]
        setCategoriaActual(categoria)
    }

   console.log(categoriaActual)
    return (
        <QuioscoContext.Provider 
        value={{
            categorias,
            categoriaActual,
            handleClickCategoria
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