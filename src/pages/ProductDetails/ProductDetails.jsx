import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import { useProduct } from '../../contexts/ProductContext'



const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useProduct();
  const { addToCart } = useCart();

  const product = products.find(item => item.id === parseInt(id));

  if (!product) {
    return (
      <section className='h-screen flex justify-center items-center'>
        Loading...
      </section>
    )
  } 
  
  const { title, price, description, image } = product;

  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center'>
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
            <img src={image} alt={title.slice(0,10)} className='max-w-[200px] lg:max-w-sm' />
          </div>
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{title}</h1>
            <p className='text-xl text-red-500 font-medium mb-6'>$ {price}</p>
            <p className='mb-8 font-medium text-gray-800'>{description}</p>
            <button 
              type="button"
              onClick={() => addToCart(product, product.id)}
              className='bg-primary py-4 px-8 text-white rounded-sm'
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails