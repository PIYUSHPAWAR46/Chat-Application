import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Login from './pages/login/Login';
import SignUp from './pages/signup/signup';
import './App.css';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';

function App() {

   const {authUser} = useAuthContext();

 return(
  <div className='p-4 h-screen flex item-center justify-center '>
    <Routes>
      <Route path='/' element={authUser ? <Home/> : <Navigate to= {'/login'}/>}/>
      <Route path='/login' element={authUser ? <Navigate to='/'/> : <Login/>}/>
      <Route path='/signup' element={authUser ? <Navigate to='/'/> : <SignUp/>}/>
    </Routes>
    <Toaster/>
    
  </div>
 )
}

export default App
