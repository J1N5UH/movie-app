import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home.js";
import Detail from "./routes/Detail.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hello" element={<h1 text="adsfasdf" />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/movie-app" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
