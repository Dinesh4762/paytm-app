import {Routes,Route, Navigate} from "react-router-dom";
import Send from "./pages/Send";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";

function App() {

  return (
    <div className="bg-[#b7b7b7] border-2 flex justify-center items-center h-svh max-w-[400px] mx-auto">
      <Routes>
        <Route  path="/signin" element={<Signin/>}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/send" element={<Send />}></Route>
        <Route path="/" element={<Navigate to="z/signin"/>}></Route>
      </Routes> 
    </div>
  );
}

export default App
