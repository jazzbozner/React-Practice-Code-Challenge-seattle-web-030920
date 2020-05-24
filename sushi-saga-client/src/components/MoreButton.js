import React from 'react'

const MoreButton = (props) => {

  const { onGetNextSushi } = props
  
  const handleNextSushi = () => {
    onGetNextSushi()
  }
    return <button onClick={handleNextSushi}>
            More sushi!
          </button>
}

export default MoreButton