import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  status: false,
};
export const ModalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setModalValue: (state) => {
      state.status = true;
    },
  },
});

export const { setModalValue } = ModalSlice.actions;
export default ModalSlice.reducer;
