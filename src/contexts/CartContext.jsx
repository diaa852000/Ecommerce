import React, {createContext, useState, useEffect, useContext} from "react";

const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, id) => {
        const newItem = {...product, amount: 1}
        const cartItem = cart.find(item => item.id === id);

        if (cartItem) {
            const newCart = [...cart].map(item => {
                if (item === cartItem) { //aslo we can do (item.id === id)
                    return {...item, amount: cartItem.amount + 1}; 
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            setCart([...cart, newItem]);
        }
    };

    console.log(cart)

    return <CartContext.Provider value={{addToCart, cart}}>{children}</CartContext.Provider>
};

export const useCart = () => useContext(CartContext);

