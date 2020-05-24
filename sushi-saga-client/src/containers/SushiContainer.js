import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'

import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  
  const { currentSushi, onEatSushi, onGetNextSushi, isSushiEaten } = props
  
  const renderSushi = () => {
  
    return currentSushi.map(sushi => {
      return <Sushi 
        sushi={sushi} 
        key={sushi.id} 
        onEatSushi={onEatSushi} 
        isSushiEaten={isSushiEaten}
      />
    })
  }

  return (
    <Fragment>
      <div className="belt">
        {renderSushi()}
        <MoreButton onGetNextSushi={onGetNextSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer