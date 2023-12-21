import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASEURL = "https://zany-erin-cocoon-suit.cyclic.app/api/v1";

const initialState = {
  formLoading: false,
  formSuccess: false,
  formError: false,
  formMessage: "",
};

export const sendForm = createAsyncThunk(
  "form/send",
  async (body, thunkAPI) => {
    try {
      const response = await axios.post(BASEURL + "/mail", body);
      console.log(response.data);
      if (response.status === 200) {
        return response.data.msg;
      }
    } catch (error) {
      if (error.response) {
        const obj = error.response.data;
        const objKey = Object.keys(obj)[0];
        let err = obj[objKey];
        console.log(err);
        return thunkAPI.rejectWithValue(err);
      } else if (error.request) {
        return thunkAPI.rejectWithValue("something went terribly wrong");
      } else {
        const obj = error.response.data;
        const objKey = Object.keys(obj)[0];
        let err = obj[objKey];
        return thunkAPI.rejectWithValue(err);
      }
    }
  }
);

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    resetForm: (state) => {
      state.formLoading = false;
      state.formError = false;
      state.formSuccess = false;
      state.formMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendForm.pending, (state) => {
        state.formLoading = true;
      })
      .addCase(sendForm.fulfilled, (state, action) => {
        state.formLoading = false;
        state.formError = false;
        state.formSuccess = true;
        state.formMessage = action.payload;
      })
      .addCase(sendForm.rejected, (state, action) => {
        state.formLoading = false;
        state.formSuccess = false;
        state.formError = true;
        state.formMessage = action.payload;
      });
  },
});

export const { resetForm } = formSlice.actions;
export default formSlice.reducer;
