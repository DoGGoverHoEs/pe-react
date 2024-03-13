import { Breadcrumbs } from "@mui/material";
import { BrowserRouter, Route, Routes} from "react-router-dom";
 import { ToastContainer} from "react-toastify";
 import 'react-toastify/dist/ReactToastify.css';
 import Navbar from "./component/Navbar";
 import Home from './pages/Home'
 import Dashboard from './pages/Dashboard';
 import Contact from './pages/Contact'
 import Footer from './component/Footer'
function App() {
  return (
   <BrowserRouter>
      <>
      <Navbar/>
      <ToastContainer position="top-right" autoClose={2000}/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/add" element={<Home/>}></Route>
        <Route path="/update/:id" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      <Footer/>
      </>
   </BrowserRouter>
  );
}

export default App;
