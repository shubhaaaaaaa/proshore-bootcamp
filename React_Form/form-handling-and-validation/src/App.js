import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.tsx'
import Signup from './components/forms/Signup.tsx'
import Login from './components/forms/Login.tsx'
import Success from './components/forms/Success.tsx'
import Error from './components/forms/Error.tsx'
// import Dashboard from './components/Dashboard.tsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<Error />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
}
export default App;
