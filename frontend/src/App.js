import "./App.css";
import Landing from "./Components/Landing";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import List from "./Components/List";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/list" element={<List />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
