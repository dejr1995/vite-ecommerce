import React from 'react'
import { Link } from 'react-router-dom'

const User = ({valor, index, onConsultar, onDelete}) => {

  return (
    <>  
        <div className='user'>
            <div className='data'>
                <div className='Name'>{valor.Name} {valor.Lastname}</div>
                <div>{valor.City}: {valor.Country}</div>
                <div><a href='#'>{valor.Email}</a></div>
            </div>
            <Link to={`/consulta`} >
            <button onClick={() => onConsultar(valor,index)} className='verde'>Editar</button>
            </Link>
            <button onClick={() => onDelete(valor,index)} className='rojo'>Eliminar</button>
        </div>
    </>
  )
}

export default User