import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: null
    },
    reducers : {
        // On crée une action setUsername qui va permettre de changer la valeur de notre state user
        // Le paramètre state est automatiquement passé par Redux Toolkit
        // Le paramètre action est automatiquement passé par Redux Toolkit et contient la valeur passée à notre action
        // (voir l'appel de dispatch(setUsername(event.target.value)) dans ChangeUsername.jsx
        setUsername: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setUsername } = userSlice.actions;
export default userSlice.reducer;