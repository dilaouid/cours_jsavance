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
            state.value = state.value + 1;
        },
        diminuer: state => {
            state.value = state.value - 1;
        }
    }
})

// on exporte nos actions pour les utiliser dans nos components
export const { augmenter, diminuer } = counterSlice.actions;

// on exporte notre reducer pour l'utiliser dans notre store
export default counterSlice.reducer;