import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';   // PrimeReact Theme
import 'primereact/resources/primereact.min.css';           // Core CSS
import 'primeicons/primeicons.css';                         // PrimeIcons
import 'primeflex/primeflex.css';                           // PrimeFlex
import HomePage from './pages/home/Home';
import { CartProvider } from './components/contexts/ShoppingCartContext';

const App: React.FC = () => {
    return (
        <div className="App">
            <CartProvider>
             <HomePage />
            </CartProvider>
            
        </div>
    );
};

export default App;
