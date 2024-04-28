import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>jello</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
