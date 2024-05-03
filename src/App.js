import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import { AuthContextProvider } from "./context/AuthContext";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Account from './pages/Account';
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>

  <AuthContextProvider>
   <Navbar />
   <Routes>
      <Route path='/' element={<Home />} />
      <Route path ='/signup' element={<Signup />} />
      <Route path ='/signin' element={<Signin />} />
      <Route path ='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />


   </Routes>
  </AuthContextProvider> 
    </>
  );
}

export default App;
