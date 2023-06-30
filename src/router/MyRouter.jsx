import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListUsers from '../components/ListUsers'
import Consulta from '../components/Consulta'
import AddUser from '../components/AddUser'

const MyRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<ListUsers/>}/>
        <Route path='/users' element={<ListUsers/>}/>
        <Route path='/consulta' element={<Consulta/>}/>
        <Route path='/add' element={<AddUser/>}/>
        <Route path='*' element={<ListUsers/>}/>
    </Routes>
  )
}

export default MyRouter