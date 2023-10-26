import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../../pages/Home/Home'
import ProductDetails from '../../pages/ProductDetails/ProductDetails'
import NotFound from '../NotFound/NotFound'

const Pathes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default Pathes