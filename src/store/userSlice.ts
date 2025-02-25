import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit"


const user = createSlice({
    name: 'user',
    initialState: {uid: ''},
    reducers: {
        changeUID(state, uid:PayloadAction<string>) {
            state.uid = ''
            state.uid = uid.payload
        },
    }
})

export const { changeUID} = user.actions;

export default user