import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'
import { useCart } from '../../contexts/CartContext';

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;

  const {removeFromCart, increaseAmount, decreaseAmount} = useCart();
  return (
    <div className='flex gap-x-4 py-2 lg:px-5 border-b border-gray-200 w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        <Link to={`/product/${id}`}>
          <img src={image} alt={title} className='max-w-[80px]' />
        </Link>
        <div className='w-full flex flex-col'>
          <div className='flex justify-between mb-2'>
            <Link
              to={`/product/${id}`}
              className='text-sm uppercase font-meduim max-w-[240px] text-primary hover:underline'
            >
              {title.slice(0, 20)}
            </Link>
            <div 
              onClick={() => removeFromCart(id)}
              className='text-gray-500 hover:text-red-500 cursor-pointer transition text-xl'>
              <IoMdClose />
            </div>
          </div>
          <div className='flex gap-x-2 h-9 text-sm'>
            <div className='flex flex-1 max-w-[100px] items-center h-full  text-primary font-medium'>
              <button 
                type='button' 
                onClick={() => decreaseAmount(id)}
                className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                <IoMdRemove />
              </button>
              <div className='h-full flex justify-center items-center px-2'>
                {amount}
              </div>
              <button 
                type='button'
                onClick={() => increaseAmount(id)}
                className='flex-1 h-full flex justify-center items-center cursor-pointer'
              >
                <IoMdAdd />
              </button>
            </div>
            <div className='flex-1 flex items-center justify-around'>
              $ {price}
            </div>
            <div className='flex-1 flex justify-end items-center text-primary font-medium'>
              $ {`${parseFloat(price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem