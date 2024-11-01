import axios from 'axios';

// Define a type for the product data
interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

// Function to fetch products
const fetchProducts = async (): Promise<Product[]> => {
    const response = await axios.get('/api/products'); 
    return response.data;
};

export default fetchProducts;


