import { createContext, useState } from 'react'
import { categorias as categoriasDB} from "../data/categorias"
import PropTypes from 'prop-types';


const QuioscoContext = createContext();


const QuioscoProvider = ({children}) => {

    // primer valor: lo que voy a usar (nombre del state) y lo otro es para modificarlo
    const [categorias, setCategorias ] =useState(categoriasDB) ;


   
    return (
        <QuioscoContext.Provider 
        value={{
            categorias
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