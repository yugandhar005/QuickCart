import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "@mui/material/Button";
import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { Route } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import { store } from "./store";
import Checkout from "./pages/Checkout";

import { Navigate } from "react-router-dom";
import Register from "./pages/Register";
import AuthProvider, { useAuth } from "./firebase/Auth";

// import AuthProvider from "./firebase/Auth";

function ProtectedRoute({children}){
  const {user} = useAuth();
  if(!user){

    return <Navigate to={'/login'}></Navigate> 
      
  }
  return children;
}



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/checkout" element={
          <ProtectedRoute>

              <Checkout></Checkout>
          </ProtectedRoute>
        }></Route>
      </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

    </>
  )
);
function App() {
  const [count, setCount] = useState(0);

  return (
    <AuthProvider>

      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    
    </AuthProvider>
    
  );
}

export default App;
