import { useState } from 'react'
import { Link, Route, Routes} from 'react-router-dom'
import '../css/App.css'
import '../css/SignUp.css'
import Login from './Login'
import SignUp from './SignUp'
import Welcome from './Welcome'

function App() {
  const [currentForm, setCurrentForm] = useState('signup')

  return (
    <div className="App">
      <nav>
      <ul>
        <li><Link to = "/"> Home </Link></li>
        <li><Link to = "/signup"> Sign Up </Link></li>
        <li><Link to = "/login"> Log In </Link></li>
      </ul>
      </nav>
      <Routes>
      <Route path = "/signup" element = {<SignUp />} />
      <Route path = "/login" element = {<Login />} />
      </Routes>
    </div>
  )
}

export default App
