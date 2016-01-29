import React, { Component, PropTypes } from 'react'

class Hero extends Component {
  render() {
   
    const { getRandomHero } = this.props
    return (
      <div>
        <button onClick={ getRandomHero }>Random Hero</button>
      </div>
    )
  }
}
Hero.propTypes = {
  getRandomHero: PropTypes.func.isRequired
}

export default Hero