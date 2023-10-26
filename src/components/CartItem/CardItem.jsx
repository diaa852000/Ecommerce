import React from 'react'

const CardItem = ({item}) => {
  const {id, title, image, price, amount} = item;
  
  return (
    <div>
      <div>
        <div>
          <img src={image} alt={title}  className='max-w-12' />
        </div>
      </div>
    </div>
  )
}

export default CardItem