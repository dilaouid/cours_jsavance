import { createSlice } from '@reduxjs/toolkit';

// const [ state, setState ] = useState(0);

// const [ counter, setCounter ] = useState(0);

// Notre slice de counter, qui va contenir notre état global de notre compteur (value) et nos actions (augmenter, diminuer)
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        augmenter: state => {
            state.value += 1 // setCounter(counter + 1)
        },
        diminuer: state => {
            state.value -= 1 // setCounter(counter - 1)
        }
    }
});

export const { augmenter, diminuer } = counterSlice.actions;
export default counterSlice.reducer;