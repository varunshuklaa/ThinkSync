import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';


const initialState = {
    pastes: localStorage.getItem("pastes")
        ? JSON.parse(localStorage.getItem("pastes"))
        : []
}

export const pasteSlice = createSlice({
    name: 'paste',
    initialState,
    reducers: {
        addToPastes: (state, action) => {
            const paste = action.payload;
            state.pastes.push(paste);
            localStorage.setItem("pastes", JSON.stringify(state.pastes));
            toast.success('Note created successfully');

        },
        updateTopastes: (state, action) => {
            const paste = action.payload
            const index = state.pastes.findIndex((item) =>
                item._id === paste._id)

            if (index >= 0) {
                state.pastes[index] = paste
                localStorage.setItem("pastes", JSON.stringify(state.pastes))

                toast.success("Note updated")
            }
        },
        resetAllPastes: (state, action) => {
            state.pastes = [];
            localStorage.removeItem("pastes");
        },
        removeFromPastes: (state, action) => {
            const pasteId = action.payload;

            console.log(pasteId);
            const index = state.pastes.findIndex((item) => item._id === pasteId);
            if (index >= 0) {
                state.pastes.splice(index, 1);
                localStorage.setItem("pastes", JSON.stringify(state.pastes));

                toast.success("Note deleted");
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateTopastes, resetAllPastes, removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer