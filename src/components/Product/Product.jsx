import React from 'react'
import { Link } from 'react-router-dom'
import { BsPlus, BsEyeFill } from 'react-icons/bs'
import { useCart } from '../../contexts/CartContext'

const Product = ({product}) => {
  const { id, title, category, image, price } = product;
  
  const {addToCart} = useCart();

  return (
    <div>
      <div className='border h-[300px] border-[#e4e4e4] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-[200px] mx-auto flex items-center justify-center'>
            <img src={image} alt={title} className='object-cover object-center max-h-[160px] group-hover:scale-110 transition-all ease-in-out duration-300' />
          </div>
        </div>
        <div className='absolute top-2 right-5 group-hover:right-2 bg-red-500/40 p-1 rounded-sm flex flex-col items-center gap-y-1 opacity-0 group-hover:opacity-100 
          transition-all ease-in-out duration-300'>
          <button type="button" onClick={() => addToCart(product, id)}>
            <div className='flex justify-center items-center text-white bg-red-500 w-8 h-8 rounded-sm'>
              <BsPlus className='text-2xl' />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className='w-8 h-8 bg-white flex justify-center items-center text-primary drop-shadow-xl rounded-sm'
          >
            <BsEyeFill/>
          </Link>
        </div>
      </div>
      <div>
        <h2>{category}</h2>
        <Link to={`/product/${id}`} className='font-semibold text-sm mb-1'>{title}</Link>
        <p className='font-thin'>$ {price}</p>
      </div>
    </div>
  )
}

export default Product