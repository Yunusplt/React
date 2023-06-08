import React from "react";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContext";

const App = () => {
  return (
    <div>
    <AuthContextProvider name="felix">
      <AppRouter/>
    </AuthContextProvider>
    </div>
  );
};

export default App;
