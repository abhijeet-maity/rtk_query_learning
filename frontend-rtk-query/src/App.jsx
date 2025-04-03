import "./App.css";
import Comments from "./components/Comments";
import Posts from "./components/Posts";
import Users from "./components/Users";
function App() {
  return (
    <div>
      <h1>Hello Redux-Query</h1>
      <Posts />
      <Users />
      <Comments />
    </div>
  );
}

export default App;
