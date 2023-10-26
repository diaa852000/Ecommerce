import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'
import CartItem from '../CartItem/CartItem'
import { useSidebar } from '../../contexts/SidebarContext'
import { useCart } from '../../contexts/CartContext'

const Sidebar = () => {
    const { isOpen, handleClose } = useSidebar();
    const { cart, clearCart, itemAmount, total } = useCart();

    useEffect(() => {
        if(isOpen){
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'auto'
        }

        return () => document.body.style.overflowY = 'auto'
    },[isOpen])

    return (
        <div className={`${isOpen ? 'right-0' : '-right-full'} w-full h-full bg-white fixed top-0 shadow-2xl md:w-[50vw] xl:max-w-[30vw] flex flex-col
            transition-all duration-300 z-20 px-4 lg:px-9`}>
            <div className='flex items-center justify-between py-6 border-b'>
                <div className='uppercase text-sm font-semibold'>Shopping Bag ({itemAmount})</div>
                <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex'>
                    <IoMdArrowForward className='text-2xl' />
                </div>
            </div>
            <div className='flex flex-col gap-y-2 flex-grow overflow-y-auto overflow-x-hidden'>
                {cart.map(item =>
                    <CartItem key={item.id} item={item} />
                )}
            </div>
            {  cart.length > 0 &&
                <div className='flex flex-col gap-y-3 py-4 mt-4'>
                <div className='w-full flex justify-between items-center'>
                    <div className='uppercase'>
                        <span className='mr-2'>Total:</span>$ {total}
                    </div>
                    <div
                        onClick={clearCart}
                        className='cursor-pointer py-4 bg-red-500 text-white w-10 h-10 flex justify-center items-center text-xl rounded-sm'
                    >
                        <FiTrash2 />
                    </div>
                </div>
                <Link to={'/'} className='text-primary capitalize font-medium w-full bg-gray-200 flex justify-center items-center p-4 rounded-sm'>view cart</Link>
                <Link to={'/'} className='bg-primary text-white capitalize font-medium w-full flex justify-center items-center p-4 rounded-sm'>checkout</Link>
            </div>
            }
        </div>
    )
}

export default Sidebar