import React, {createContext, useContext, useState, useEffect} from 'react'
import axios from 'axios';
import { BASE_URL } from '../utils/constants';


const ProductContext = createContext();

export const ProductContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    const filteredProducts = products.filter(product => product.category === "men's clothing" || product.category === "women's clothing")


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const {data} = await axios.get(`${BASE_URL}/products`);
                setProducts(data)
            } catch (err) {
                throw err;
            }
        }
        fetchProducts();
    },[])
    
    return <ProductContext.Provider value={{products, filteredProducts}}> {children} </ProductContext.Provider>
}

export const useProduct = () => useContext(ProductContext);
