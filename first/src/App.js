import Nav from "./components/Nav"
import AboutMe from "./components/AboutMe"
import { Link, Route, Routes } from "react-router-dom";
function App(){
  return(
    <div>
    <Nav one={Math.floor(Math.random()*10) > 5 ? 200 : 100} two="mansi" three = "love" four="you"/>
    <h1>my name is pj</h1>
    <Link to="/about-me">About Me</Link>

    <Routes>
      <Route path="/about-me" element={<AboutMe />}></Route>
    </Routes>
    </div>
  )
}
export default App                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ;