import { Route, Routes } from "react-router-dom";
import PostIndex from "./components/PostIndex";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PostIndex />} />
      </Routes>
    </>
  );
}

export default App;