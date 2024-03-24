import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Todos from './pages/Todos'
import Auth from './pages/Auth'
import SignUp from './pages/SignUp'
import CustomNavBar from './components/CustomNavbar'
import ProtectedRoutes from './components/ProtectedRoutes'

function App () {
  return (
    <>
      <CustomNavBar />
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route index path='/' element={<Todos />} />
          </Route>
          <Route path='/auth' element={<Auth />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
