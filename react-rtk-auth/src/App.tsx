import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontendLayout from "./layouts/FrontendLayout";
import IndexPage from "./pages/IndexPage";
import RegisterPage from "./pages/RegisterPage";
import BackendLayout from "./layouts/BackendLayout";
import Dashboard from "./pages/Dashboard";
import PostPage from "./pages/PostPage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontendLayout />}>
          <Route index element={<IndexPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route path="/dashboard" element={<BackendLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="posts" element={<PostPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
