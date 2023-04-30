import Dashboard from "./Dashboard";
import { Routes, Route } from 'react-router-dom';
import Login from "./Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
