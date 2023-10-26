import React, {useState, useContext, createContext} from 'react'

const SidebarContext = createContext();

export const SidebarContextProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(!isOpen);


    return <SidebarContext.Provider value={{isOpen, handleClose, setIsOpen}}> {children} </SidebarContext.Provider>
};


export const useSidebar = () => useContext(SidebarContext);



