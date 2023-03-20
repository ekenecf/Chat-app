import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import SignUp from './auth/SignUp'
import Home from './components/Home'
import SignIn from './auth/SignIn'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
