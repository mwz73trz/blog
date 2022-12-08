import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Home from "./pages/Home";
import DeletePost from "./pages/DeletePost";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:postId/delete" element={<DeletePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
