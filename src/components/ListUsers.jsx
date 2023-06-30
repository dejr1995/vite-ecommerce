import React, { useEffect, useState } from 'react'
import { fetchAllUsers, fetchDeleteUser, fetchUser } from '../store/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import User from './User';
import { Link } from 'react-router-dom';
import { setAgregarPressed, setEditarPressed } from '../store/buttonPressedSlice'

const ListUsers = () => {

  const list = useSelector(state => state.users.listUsers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
    fetchAllUsers();
  }, [dispatch])

  const consultarId = (valor) => {
    dispatch(fetchUser(valor.id))
    dispatch(setAgregarPressed(true));
    dispatch(setEditarPressed(false));
  }

  const handleEditClick = () => {
    dispatch(fetchUser({}))
    dispatch(setAgregarPressed(false));
    dispatch(setEditarPressed(true));
  };

  return (
    <>
    <div>
      <Link to={'/consulta'} className="myLink" onClick={handleEditClick}>AGREGAR USUARIO</Link>
    </div>
      <div className='presentacion'>
        {list.map((valor,index)=>
        <User valor={valor} index={index} onConsultar={consultarId} onDelete={fetchDeleteUser(valor.id)}/>)}        
      </div>
    </>
  )
}

export default ListUsers