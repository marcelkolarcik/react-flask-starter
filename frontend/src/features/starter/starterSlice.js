import {createSlice} from "@reduxjs/toolkit";

const initialState = {

    numOfRequests: 0,

};

const starterSlice = createSlice({
    name: 'starter',
    initialState,
    reducers: {

        setNumOfRequests(state, action) {
            state.numOfRequests += action.payload
        },


    }
})

export default starterSlice.reducer;
export const {
    setNumOfRequests,

} = starterSlice.actions;
