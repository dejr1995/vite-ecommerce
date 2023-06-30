import React, { useEffect, useState } from 'react'
import { fetchAddUsers } from '../store/usersSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const AddUser = () => {

    const [file, setFile] = useState('');
    const [user, setUser] = useState({
        id: '',
        Name: '',
        Lastname: '',
        City: '',
        Country: '',
        Email: ''
    });

    const dispatch = useDispatch();

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
    
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = () =>{
        upload();
    }
    
  return (
    <>
        <form >
            <div className="mb-3">
                <label htmlFor="id" className="form-label">id</label>
                <input value={id} name="id" onChange={handleChange} type="text" id="id" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="Name" className="form-label">name</label>
                <input value={Name} name="Name" onChange={handleChange} type="text" id="Name" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="Lastname" className="form-label">lastname</label>
                <input value={Lastname} name="Lastname" onChange={handleChange} type="text" id="Lastname" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="City" className="form-label">City</label>
                <input value={City} name="City" onChange={handleChange} type="text" id="City" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="Country" className="form-label">Country</label>
                <input value={Country} name="Country" onChange={handleChange} type="text" id="Country" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="Email" className="form-label">Email</label>
                <input value={Email} name="Email" onChange={handleChange} type="text" id="Email" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="Image" className="form-label">Image</label>
                <input name="inputFile" onChange={(e) => setFile(e.target.files[0])} type="file" className="form-control" placeholder='Ingrese una imagen'/>
            </div><hr/>
            
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">AGREGAR USUARIO</button>
            <Link to={`/`} className="myLink">Regresar</Link>
        </form>
    </>
  )
}

export default AddUser