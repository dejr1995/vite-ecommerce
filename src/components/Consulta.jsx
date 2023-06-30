import React, { useEffect, useState } from 'react'
import { fetchAddUser, fetchAddUsers, fetchDeleteUser, fetchUpdateUser, fetchUser } from '../store/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectButtonPressed } from '../store/buttonPressedSlice';

const Consulta = () => {

  const list = useSelector(state => state.users.listUsers);
  
  const { agregar, editar } = useSelector(selectButtonPressed);
  
  const dispatch = useDispatch();
  
  let extraerId = null;
  const [file, setFile] = useState('');
  const [user, setUser] = useState({
    id:'',
    Name: '',
    Lastname: '',
    City: '',
    Country: '',
    Email: ''
  });

  const handleChange = (e) => {
    setUser({
        ...user,
        [e.target.name]: e.target.value,
    });
  };

  const upload = () => {
    try {
        const formdata = new FormData()
        formdata.append('id', id)
        formdata.append('Name', Name)
        formdata.append('Lastname', Lastname)
        formdata.append('City', City)
        formdata.append('Country', Country)
        formdata.append('Email', Email)
        formdata.append('image',file)

        const table = 'image';
        
        dispatch(fetchAddUsers(table ,formdata, user))
        document.getElementById('inputFile').value = null;
    }catch (error) {
        console.log(error)
    }
  }

  const {id,Name,Lastname,City,Country,Email} = user;

  const handleAdd = () =>{
    upload();
  }
  
  const handleUpdate = () => {
    const arrayUser = {
      Name: Name,
      Lastname: Lastname,
      City: City,
      Country: Country,
      Email: Email,
    };
    dispatch(fetchUpdateUser(extraerId, arrayUser));
    setUser({
      Name: '',
      Lastname: '',
      City: '',
      Country: '',
      Email: '',
    })
  };

  const verificar = () => {
    if(extraerId === null){
      document.getElementById('id').value = '';
    }
  }

  useEffect(() => {
    verificar()
  })

  return (
    <>
      <div>
        {list.map((valor)=> {
          extraerId = valor.id;  
        })}     
      </div>

      <div>
      <input value={id} placeholder='id' name='id' id='id' type="text" onChange={handleChange}/>
      <span style={{ margin: '0 10px' }}></span>
      <Link to={`/`} className="myLink">Regresar</Link>
      <p>Valor extraído: {extraerId}</p>
      </div><hr/>
      
      <div>
        <input value={Name} placeholder='Nombre' name='Name' id='Name' type="text" onChange={handleChange}/>
        <input value={Lastname} placeholder='Apellido' name='Lastname' id='Lastname' type="text" onChange={handleChange}/>
        <input value={City} placeholder='Ciudad' name='City' id='City' type="text" onChange={handleChange}/>
        <input value={Country} placeholder='Pais' name='Country' id='Country' type="text" onChange={handleChange}/>
        <input value={Email} placeholder='Correo' name='Email' id='Email' type="text" onChange={handleChange}/><hr/>
        <input name="inputFile" onChange={(e) => setFile(e.target.files[0])} type="file" className="form-control" placeholder='Ingrese una imagen'/><hr/>
        <button type='submit' onClick={handleAdd} disabled={agregar}>Agregar</button>
        <button type='submit' onClick={handleUpdate} disabled={editar}>Editar</button>

      </div>
    
    </>
  )
}

export default Consulta