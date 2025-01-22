import './App.css'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import { AuthContext, AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen overflow-hidden">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </AuthProvider >
    </>
  )
}

export default App