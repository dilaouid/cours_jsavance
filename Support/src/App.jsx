import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Counter from './components/Counter';
import TestAPI from './components/TestAPI';

import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    // On enveloppe notre application avec le Provider pour que tout les components puissent accéder à notre store
    <Provider store={store}>
      <BrowserRouter>

      { /* Quelque chose qui sera affiché dans toutes mes routes */}
      <nav>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/api">Test API</Link>
          </li>
        </ul>
      </nav>


    { /* Mes routes */}
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/counter" element={<Counter username="Franck" />} />
      <Route path="/api" Component={TestAPI} />
    </Routes>

      </BrowserRouter>
    </Provider>
  )
}

export default App