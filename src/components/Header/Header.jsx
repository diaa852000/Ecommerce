import React, { useEffect, useState } from 'react'
import { useSidebar } from '../../contexts/SidebarContext'
import { BsBag } from 'react-icons/bs';
import { useCart } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'

const Header = () => {
  const [isActive, setIsActive] = useState(false)

  const { setIsOpen, isOpen } = useSidebar();
  const { itemAmount } = useCart();

  useEffect(() => {
    window.addEventListener('scroll', () =>{
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    })
  },[])

  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
      <div className='container mx-auto flex justify-between items-center h-full '>
        <Link to={'/'}>
          <img src={logo} alt="logo" className='w-[40px]' />
        </Link>
        <div className='cursor-pointer flex relative' onClick={() => setIsOpen(!isOpen)}>
          <BsBag className='text-2xl' />
          <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header