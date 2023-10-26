import React from 'react'
import { Link } from 'react-router-dom'
import {IoMdArrowForward} from 'react-icons/io'
import {FiTrash} from 'react-icons/fi'
import CartItem from '../CartItem/CardItem'
import { useSidebar } from '../../contexts/SidebarContext'
import { useCart } from '../../contexts/CartContext'

const Sidebar = () => {
    const {isOpen, handleClose} = useSidebar();
    const {cart} = useCart();
    return (
        <div className={`${isOpen ? 'right-0' : '-right-full'} w-full h-full bg-white fixed top-0 shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-9`}>
            <div className='flex items-center justify-between py-6 border-b'>
                <div className='uppercase text-sm font-semibold'>Shopping Bag (0)</div>
                <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex'>
                    <IoMdArrowForward className='text-2xl'/>
                </div>
            </div>
            <div>
                {cart.map(item => 
                    <CartItem key={item.id} item={item}/>
                )}
            </div>
        </div>
    )
}

export default Sidebar