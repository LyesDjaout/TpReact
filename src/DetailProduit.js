import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importez les styles du carrousel
import { Carousel } from "react-responsive-carousel";
import { useLocation } from "react-router-dom"; // Importez useParams pour obtenir l'ID du produit dans l'URL


function DetailProduit() {
    const location = useLocation();
    const produitDetail = location.state.product;

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-2">Détails du produit</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">{produitDetail.title}</h3>
                        {/* Utilisation du carrousel pour afficher les images */}
                        <Carousel showArrows={true} showThumbs={false}>
                            {produitDetail.images.map((image, index) => (
                                <div key={index}>
                                    <img
                                        src={image}
                                        alt={`Image ${index}`}
                                        className="w-full mb-2"
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div>
                        <p className="text-gray-600 mb-2">Description : {produitDetail.description}</p>
                        <p className="mb-2">Prix : {produitDetail.price} €</p>
                        <p className="mb-2">Réduction : {produitDetail.discountPercentage}%</p>
                        <p className="mb-2">Stock : {produitDetail.stock}</p>
                        <p className="mb-2">Marque : {produitDetail.brand}</p>
                        <p className="mb-2">Catégorie : {produitDetail.category}</p>
                        {/* Ajoutez d'autres détails du produit ici */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailProduit;