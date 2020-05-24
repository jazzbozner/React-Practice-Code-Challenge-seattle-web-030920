import React, { Fragment } from 'react'

const Sushi = (props) => {

  const { sushi, onEatSushi, isSushiEaten} = props
  const { name, price, img_url } = sushi

  const handleEatSushi = () => {
    onEatSushi(sushi)
  }

  const handleIsSushiEaten = () => {
    return isSushiEaten(sushi)
  }

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={handleEatSushi}>
        { 
          handleIsSushiEaten() ?
            null
          :
            <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi