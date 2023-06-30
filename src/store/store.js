import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./usersSlice";
import { buttonPressedSlice } from "./buttonPressedSlice";

export default configureStore({
    reducer:{
        users:usersSlice.reducer,
        buttonPressed: buttonPressedSlice.reducer,
    }
})