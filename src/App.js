import React, { Component } from 'react';
import { connect } from 'react-redux'
import Hero from './Hero'
import HeroDetail from './HeroDetail'

import { getRandom,fetchPostsIfNeeded } from './action';

function mamState(state)
{

	return state;
}
function mamDispatch(dispatch)
{
	return {
		getRandomHero : () => dispatch( getRandom() )
	}
}

class DotaRandomApp extends Component {
  render() { 
  	const { getRandomHero , hero , isFetching } = this.props;
    return (
    <div>
      <h1>Hello, world. </h1>
      <HeroDetail 
      	hero={hero} 
      	isFetching={isFetching} />
      <Hero getRandomHero={getRandomHero} / >
    </div>
    );
  }
}
// DotaRandomApp.contextTypes = {
// 	store: React.PropTypes.object
// };

export default connect(mamState,mamDispatch)(DotaRandomApp)
