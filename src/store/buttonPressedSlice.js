import { createSlice } from "@reduxjs/toolkit";

export const buttonPressedSlice = createSlice({
    name: "buttonPressed",
    initialState: {
      agregar: false,
      editar: false,
    },
    reducers: {
      setAgregarPressed: (state, action) => {
        state.agregar = action.payload;
      },
      setEditarPressed: (state, action) => {
        state.editar = action.payload;
      },
    }
})

export const { setAgregarPressed, setEditarPressed } = buttonPressedSlice.actions;

export const selectButtonPressed = (state) => state.buttonPressed;