import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    listUsers: [],
  },
  reducers: {
    setlistUsers: (state, action) => {
      state.listUsers = action.payload;
    },
    setUser: (state, action) => {
      state.listUsers = action.payload;
    },
    addUser: (state, action) => {
      state.listUsers = [...state.listUsers, action.payload];
    },
    updateUser: (state, action) => {
      const { id, Name, Lastname, City, Country, Email } = action.payload;
      const user = state.users[id];
      if (user) {
        user.Name = Name;
        user.Lastname = Lastname;
        user.City = City;
        user.Country = Country;
        user.Email = Email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
            const existingUser = state.listUsers.find((ide) => ide.id === id);
            if(existingUser){
                state.listUsers = state.listUsers.filter((ide) => ide.id !== id);
            }
      },
  },
});

//const conx = (axios.defaults.baseURL = "http://localhost:9000/api/");

export const { setlistUsers, setUser, addUser, updateUser, deleteUser } = usersSlice.actions;

export const fetchAllUsers = () => (dispatch) => {
  axios
    .get('http://localhost:9000/api/getusers')
    .then((response) => {
      dispatch(setlistUsers(response.data));
    })
    .catch((error) => console.log(error));
};

export const fetchUser = (id) => (dispatch) => {
  axios
    .get('http://localhost:9000/api/getuser/'+id)
    .then((response) => {
      dispatch(setUser(response.data));
    })
    .catch((error) => console.log(error));
};

export const fetchAddUser = (user) => (dispatch) => {
  axios
    .post('http://localhost:9000/api/createuser/', user)
    .then((response) => {
      dispatch(addUser(response.data));
    })
    .catch((error) => console.log(error));
};

export const fetchAddUsers = (table, formdata, user) => (dispatch) => {
  axios
    .post(`http://localhost:9000/api/images/${table}`, formdata, user)
    .then((response) => {
      dispatch(addUser(response.data));
    })
    .catch((error) => console.log(error));
};

export const fetchUpdateUser = (id, user) => (dispatch) => {
  axios
    .put('http://localhost:9000/api/updateuser/'+id, user)
    .then((response) => {
      dispatch(updateUser(response.data));
    })
    .catch((error) => console.log(error));
};

export const fetchDeleteUser = (id) => (dispatch) => {
  axios
    .delete('http://localhost:9000/api/deleteuser/'+id)
    .then((response) => {
      dispatch(deleteUser(response.data));
    })
    .catch((error) => console.log(error));
};
