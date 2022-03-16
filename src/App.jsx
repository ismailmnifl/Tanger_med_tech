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
import { useContext } from "react";
import { Context } from "./contexts/Context";
import UpdateUser from "./pages/UpdateUser";



function App() {
  const {user} = useContext(Context);
  console.log(user);
  return (
    <div className="App">
     
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={user ? <Home/> : <Login />} />

            <Route path="/register" element={user ? <Home /> : <Register />} />

            <Route path="/dashboard" element={user ? <Dashboard /> : <Login />} >
              <Route path="users" element={<Users />} />
              <Route path="reservations" element={<Reservations />} />
              <Route path="roles" element={<Roles />} />
            </Route>

            <Route path="/about" element={<About />} />
            
            <Route path="/update/user/:id" element={user ? <UpdateUser /> : <Home/> } />
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
