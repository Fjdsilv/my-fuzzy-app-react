import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contact from "./pages/Contact";
import Fuzzies from "./pages/Fuzzies";
import AddFuzzyPage from "./pages/AddFuzzyPage";
import Error from "./pages/Error";
import ShareLayout from "./pages/ShareLayout";


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ShareLayout />}>
        <Route index element={<Fuzzies />} />
        <Route path="addFuzzyPage" element={<AddFuzzyPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
