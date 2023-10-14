import { BrowserRouter, Route, Routes } from "react-router-dom";
import CatalogueProduits from "./CatalogueProduits";
import DetailProduit from "./DetailProduit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CatalogueProduits />} />
        <Route path="/produit/:id" element={<DetailProduit />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;