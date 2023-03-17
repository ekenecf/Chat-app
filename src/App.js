// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import SignUp from './auth/SignUp'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
