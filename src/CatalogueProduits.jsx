import{ useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CatalogueProduits() {
    const [produits, setProduits] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://dummyjson.com/products").then((response) => {
            setProduits(response.data.products);
        });
    }, []);

    
    const handleProductClick = (product) => {
        navigate(`/produit/${product.id}`, { state: { product } });
    };

    return (

        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Catalogue de produits</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                {produits.map((product) => (
                    <div
                        key={product.id}
                        onClick={() => handleProductClick(product)}
                        className="bg-white p-4 rounded shadow cursor-pointer"
                    >
                        <h2 className="text-lg font-semibold">{product.title}</h2>
                        <img src={product.thumbnail} alt={product.title} className="mt-2 w-full h-auto" />
                        <p className="mt-2 text-gray-600">€{product.price}</p>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CatalogueProduits;