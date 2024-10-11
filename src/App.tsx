import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import Users from "./pages/Users";
import Products from "./pages/Products";
import "./index.css";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="bg-grey min-h-screen">
          <nav className="p-4 bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto">
              <Link to="/" className="text-black font-bold mr-4">
                Home
              </Link>
              <Link to="/users" className="text-black mr-4">
                Users
              </Link>
              <Link to="/products" className="text-black">
                Products
              </Link>
            </div>
          </nav>
          <div className="max-w-7xl mx-auto p-4">
            <Routes>
              <Route path="/users" element={<Users />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
