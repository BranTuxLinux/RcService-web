import { createSlice } from "@reduxjs/toolkit";

const user = {
  id: "",
  email: "",
  name: "",
  direction: "",
  cc: "",
  phone: "",
  Authorization: false,
  Loading: true,
};
const UserSlice = createSlice({
  name: "user",
  initialState: user,
  reducers: {
    newUser: (state, action) => {
      let data = action.payload;
      state.id = data.id;
      state.email = data.email;
      state.name = data.name;
      state.cc = data.cc;
      state.direction = data.direction;
      state.phone = data.phone;
    },
    resetUser: (state) => {
      state.id = "";
      state.email = "";
    },
    setIsAuthenticate: (state, action) => {
      state.Authorization = action.payload;
    },
    setIsLoading: (state, action) => {
      state.Loading = action.payload;
    },
  },
});
export const { newUser, resetUser, setIsAuthenticate, setIsLoading } =
  UserSlice.actions;
export default UserSlice.reducer;
