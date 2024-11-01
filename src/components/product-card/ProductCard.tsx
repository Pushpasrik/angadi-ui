import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

// Define product type (or import from a types file if shared)
interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

interface ProductCardProps {
    product: Product;
    onBuy: (productName: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onBuy }) => {
    const { name, price, image } = product;

    return (
        <Card
            title={name}
            subTitle={`$${price.toFixed(2)}`}
            className="p-shadow-3"
            header={<img alt={name} src={image} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />}
        >
            <Button
                label="Buy Now"
                icon="pi pi-shopping-cart"
                className="p-button-primary"
                onClick={() => onBuy(name)}
            />
        </Card>
    );
};

export default ProductCard;
