import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Counter from './components/Counter';
import TestAPI from './components/TestAPI';

function App() {
  return (
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
      <Route path="/counter" Component={<Counter username="Franck" />} />
      <Route path="/api" Component={TestAPI} />
    </Routes>

    </BrowserRouter>
  )
}

export default App