import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.tsx'
import Signup from './components/forms/Signup.tsx'
import Login from './components/forms/Login.tsx'
import Success from './components/forms/Success.tsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
}
export default App;
