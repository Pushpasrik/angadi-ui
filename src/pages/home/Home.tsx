import { Toast } from 'primereact/toast';
import React, { useEffect, useRef, useState } from 'react';
import ProductList from './ProductList';
import TopBar from './TopBar';
import fetchProducts from './apis/fetchProducts';
import { useCart } from '../../components/contexts/ShoppingCartContext';

// Define product type
interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    inventoryStatus: string,
    rating: number,
    category: string
}


const HomePage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const toast = useRef<Toast>(null);
    const  {dispatch } = useCart();

    useEffect(() => {
       fetchProducts().then((data: any) => {
        setProducts(data)
       });
    }, []);

    const handleAddToCart = (product: Product) => {
        dispatch({ type: 'ADD_ITEM', payload: product });
        toast.current?.show({ severity: 'success', summary: 'Success', detail: `Added ${product.name} to your cart`, life: 3000 });
    };

    return (
        <div className="p-m-4">
            <Toast ref={toast} />
            <TopBar />
            <ProductList products={products} onAddToCart={handleAddToCart} />
        </div>
    );
};

export default HomePage;
