import { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Login'
import MainBoard from './components/MainBoard'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    isLoginCheck();
  })
  const isLoginCheck = () => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
  }
  return (
    isLoggedIn ? <MainBoard /> : <Login />
  )
}

export default App
