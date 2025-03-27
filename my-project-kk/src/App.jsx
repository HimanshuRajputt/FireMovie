import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Movies } from "./components/Movies";
import { AddMovie } from "./components/AddMovie";
import { ViewMovie } from "./components/ViewMovie";
import { About } from "./components/About";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Movies/>} />
      <Route path="/AddMovie" element={<AddMovie/>} />
      <Route path="/Movies/:id" element={<ViewMovie/>} />
      <Route path="/About" element={<About/>}/>
    </Routes>
  </>
  )
}

export default App;
