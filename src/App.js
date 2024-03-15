// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import UserCart from "./components/User/UserCart";
import UserSignup from "./components/User/UserSignup";
import UserLogin from "./components/User/UserLogin";
import FarmerDashboard from "./components/Farmer/FarmerDashboard";
import FarmerSignup from "./components/Farmer/FarmerSignup";
import FarmerLogin from "./components/Farmer/FarmerLogin";
import store from "./components/redux/store";
import UserLandingPage from "./components/UserLandingPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Farmer's Section */}
          <Route path="/farmer/dashboard" element={<FarmerDashboard />} />x
          <Route path="/farmer/login" element={<FarmerLogin />} />
          <Route path="/farmer/signup" element={<FarmerSignup />} />

          {/* User's Section */}
          <Route path="user/login" element={<UserLogin />} /> {/* Updated this line */}
          <Route path="user/signup" element={<UserSignup />} />
          <Route path="/" element={<UserLandingPage />} />
          <Route path="cart" element={<UserCart />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
