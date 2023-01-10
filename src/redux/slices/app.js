import { createSlice } from "@reduxjs/toolkit";

//
import { dispatch } from "../store";

const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT", // can be CONTACT, STARED, SHARED
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // Toggle sidebar
    toggleSidebar(state, action) {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType(state, action) {
      state.siderbar.type = action.payload.type;
    },
  },
});

// Reducer
export default slice.reducer;

//
