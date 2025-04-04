import "./App.css";
import "./styles/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Comments from "./components/Comments";
import Posts from "./components/Posts";
import Users from "./components/Users";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/users" element={<Users/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/comments" element={<Comments/>}/>
      </Routes>
    </Router>
    // <div>
    //   <h1>Hello Redux-Query</h1>
    //   <Posts />
    //   <Users />
    //   <Comments />
    // </div>
  );
}

export default App;
