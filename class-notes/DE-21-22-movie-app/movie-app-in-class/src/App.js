import React from "react";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContext";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
    <AuthContextProvider name="felix">
      <AppRouter/>
      <ToastContainer/>
    </AuthContextProvider>
    </div>
  );
};

export default App;
