import { createContext } from 'react'
import PropTypes from 'prop-types';

const QuioscoContext = createContext();


const QuioscoProvider = ({children}) => {

    const autenticado = true;
    return (
        <QuioscoContext.Provider 
        value={{
            autenticado
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