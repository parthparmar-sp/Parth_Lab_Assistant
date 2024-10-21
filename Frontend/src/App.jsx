
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './pages/Header'
import Auth from './pages/Auth/login';
import Complain from './pages/Complain/Complain';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} /> {/* Default home route */}
        <Route path="/header" element={<Header />} /> {/* Correct lowercase path */}
        <Route path="/auth" element={<Auth />} /> 
        <Route path='/complain' element={<Complain/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
