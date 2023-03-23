import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import store from './redux/Store'
import { Provider } from 'react-redux'

import SignUp from './auth/SignUp'
import Home from './components/Home'
import SignIn from './auth/SignIn'
import Dashboard from './dashboard/Dashboard'

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
</Provider>
    </div>
  )
}

export default App
