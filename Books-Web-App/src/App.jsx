
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import BookDetails from './pages/BookDetails'
import Navbar from './components/Navbar'
function App() {


  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/bookdetails/:id" element={<BookDetails />} />
      </Routes>
    </>
  )
}

export default App
