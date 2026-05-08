import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import { useState } from 'react'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

function App() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <Home
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        />

        <Route
          path="/dashboard"
          element={
            <Dashboard
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App