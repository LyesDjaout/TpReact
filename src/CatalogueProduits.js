import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import DetailProduit from "./DetailProduit";

function CatalogueProduits() {
    const [produits, setProduits] = useState([]);
    const [produitDetail, setProduitDetail] = useState(null);
    const navigate = useNavigate(); // Mettez à jour la variable

    useEffect(() => {
        axios.get("https://dummyjson.com/products").then((response) => {
            setProduits(response.data.products);
        });
    }, []);

    // Fonction pour gérer le clic sur un produit
    const handleProductClick = (product) => {
        // Mettez à jour l'état du composant DetailProduit avec les détails du produit
        setProduitDetail(product);

        navigate(`/produit/${product.id}`, { state: { product } });
    };

    return (

        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Catalogue de produits</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Affichez la liste des produits avec des éléments cliquables */}
                {produits.map((product) => (
                    <div
                        key={product.id}
                        onClick={() => handleProductClick(product)}
                        className="bg-white p-4 rounded shadow cursor-pointer"
                    >
                        <h2 className="text-lg font-semibold">{product.title}</h2>
                        <img src={product.thumbnail} alt={product.title} className="mt-2 w-full h-auto" />
                        <p className="mt-2 text-gray-600">${product.price}</p>
                        {/* ... autres détails du produit */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CatalogueProduits;