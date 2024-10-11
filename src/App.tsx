import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import Users from "./pages/Users";
import "./index.css";
import Products from "./pages/Products";

function App() {
  return (
    <AppProvider>
      <Router>
        <nav className="p-4 bg-yellow-500">
          <Link to="/users" className="mr-4">
            Users
          </Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
