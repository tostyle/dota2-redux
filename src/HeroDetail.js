import React, { Component, PropTypes } from 'react'

class HeroDetail extends Component {
  render() {
   
    const { isFetching ,hero } = this.props;
    return (
      <div>
        {isFetching &&
          <h2>Loading...</h2>
        }
        {!isFetching &&
          <h3>{hero.localized_name}</h3>
        }
      </div>
    )
  }
}
export default HeroDetail