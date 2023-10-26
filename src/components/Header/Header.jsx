import React from 'react'
import { useSidebar } from '../../contexts/SidebarContext'
import { BsBag } from 'react-icons/bs';

const Header = () => {
  const {setIsOpen, isOpen} = useSidebar();

  return (
    <div className='bg-pink-200'>
      <div>Header</div>
      <div className='cursor-pointer flex relative' onClick={() => setIsOpen(!isOpen)}>
        <BsBag className='text-2xl'/>
      </div>
    </div>
  )
}

export default Header