import { Route, Routes } from "react-router-dom";
import BlogPage from "./base-blog-em/BlogPage";

function App() {
  return (
    // <div>
    // 	<button style={{backgroundColor: 'red'}} >Change to blue</button>
    // </div>

    <Routes>
      {/* React-query */}
      <Route path="/" element={<BlogPage />} />
    </Routes>
  );
}

export default App;
