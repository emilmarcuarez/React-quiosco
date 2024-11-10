import PropTypes from 'prop-types';

export default function Categoria({ categoria }) {
 
   const {icono, nombre} = categoria;
  
    return (
    <div className="flex items-center gap-4 border w-full p-3 hover:bg-amber-400">
        <img 
        src={`/img/icono_${icono}.svg`}
        alt="imagen icono"
        className='w-12'
        />
        <p className='text-lg font-bold cursor-pointer truncate'>{nombre}</p>
    </div>
  )
}

Categoria.propTypes = {
    categoria: PropTypes.shape({
        icono: PropTypes.string.isRequired,
        nombre: PropTypes.string.isRequired
    }).isRequired,
};
