import React from 'react'
import { useProduct } from '../../contexts/ProductContext'

import Product from '../../components/Product/Product';
import Hero from '../../components/Hero/Hero'

const Home = () => {
  const { products, filteredProducts } = useProduct();

  return (
    <div>
      <Hero/>
      <section className='py-16'>
        <div className='container mx-auto lg:p-0'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-sm md:max-w-none mx-auto md:mx-0'>
            {filteredProducts.map(product =>
              <Product key={product.id} product={product}/>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home