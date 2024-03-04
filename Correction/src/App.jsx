import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Homepage from './components/Homepage/Homepage'
import Posts from './components/Posts/Posts'
import About from './components/About/About'

function App() {
  return (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" Component={Homepage} />
      <Route path="/posts" Component={Posts}/>
      <Route path="/about" Component={About} />
    </Routes>
  </BrowserRouter>)
}

export default App
