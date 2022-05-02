import NavBar from "./components/NavBar";
import AddStudent from "./components/AddStudent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentsList from "./components/StudentsList";

function App() {
  return (
    <>
    <BrowserRouter> 
    
    <NavBar/>
    <Routes>
      <Route index element={<StudentsList/>}/>
      <Route path="/" element={<StudentsList/>}/> 
      <Route path="/studentList" element={<StudentsList/>}/>
      <Route path="/addStudent" element={<AddStudent/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
