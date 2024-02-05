import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'

function App() {
  return (
    <Routes>
      <Route path="/:id" element={<HomePage/>} />
      {/* <Route path="/:id" element={<UserPage/>} /> */}
    </Routes>
  );
}

export default App;
