import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice'
import userReducer from './features/user/userSlice'

// On crée notre store, ca va être un objet qui va contenir tout nos états globaux de notre application
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer
        // plein d'autre reducers stylés
    }
})