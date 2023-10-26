import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from '../../pages/Home/Home'
import ProductDetails from '../../pages/ProductDetails/ProductDetails'
import NotFound from '../NotFound/NotFound'

const Pathes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/product/:id' element={<ProductDetails/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </Router>
    )
}

export default Pathes