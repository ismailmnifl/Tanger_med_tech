import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* import pages and components */
import "./App.css"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
/* import pages and components */
import Navbar from "./components/global/Navbar";
import Users from "./components/dashboardComponents/Users/Users";
import Reservations from "./components/dashboardComponents/Reservations/Reservations";
import Roles from "./components/dashboardComponents/Roles/Roles";
import ThemeContextProvider from "./contexts/ThemeContext";


function App() {
  const user = true;
  return (
    <div className="App">
      <ThemeContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route path="/dashboard" element={<Dashboard />} >
              <Route path="users" element={<Users />} />
              <Route path="reservations" element={<Reservations />} />
              <Route path="roles" element={<Roles />} />
            </Route>
            <Route path="/about" element={<About />} />

          </Routes>
        </Router>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
