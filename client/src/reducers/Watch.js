import { createSlice } from "@reduxjs/toolkit";

const watchSlice = createSlice({
    name: "Watch",
    initialState: {
        lists: [],
    },
    reducers: {
        addWatch: (state, action) => {
            state.lists = action.payload.lists;
            window.localStorage.setItem("lists", JSON.stringify(action.payload.lists));
        },
        removeWatch: (state, action) => {
            state.lists = "";
            window.localStorage.removeItem("lists");
        }

    }
})

export const { addWatch, removeWatch } = watchSlice.actions;

export default watchSlice.reducer;  