import { createSlice } from '@reduxjs/toolkit';

// const [ state, setState ] = useState(0);

// const [ counter, setCounter ] = useState(0);


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        augmenter: state => {
            state.value = state.value + 1;
        },
        diminuer: state => {
            state.value = state.value - 1;
        }
    }
})

export const { augmenter, diminuer } = counterSlice.actions;
export default counterSlice.reducer;