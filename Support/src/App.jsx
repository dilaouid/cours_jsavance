import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Counter from './components/Counter';
import TestAPI from './components/TestAPI';
import ChangeUsername from './components/ChangeUsername';

import { Provider } from 'react-redux';
import { store } from './store';

import Navbar from './components/Navbar';

function App() {
  

  return (
    // On enveloppe notre application avec le Provider pour que tout les components puissent accéder à notre store
    <Provider store={store}>
      <BrowserRouter>

      <Navbar />


      { /* Quelque chose qui sera affiché dans toutes mes routes */}
      


    { /* Mes routes */}
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/api" Component={TestAPI} />
      <Route path="/username" Component={ChangeUsername} />
    </Routes>

     

      </BrowserRouter>
    </Provider>
  )
}

export default App