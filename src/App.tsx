import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Users from "./pages/Users";

function App() {
  return (
    <Router>
      <nav className="p-4 bg-yellow-500">
        <Link to="/users" className="mr-4">
          Users
        </Link>
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
