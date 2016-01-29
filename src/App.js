import React, { Component } from 'react';
import Hero from './Hero'

import { getRandom,fetchPostsIfNeeded } from './action';

function mamState(state)
{
	const { isFetching, hero } = state
	return 	{
		isFetching : false,
		hero : {}
	}
}

export default class DotaRandomApp extends Component {
  render() { 
  	console.log(this.context);
    return (
    <div>
      <h1>Hello, world. </h1>
      <Hero / >
    </div>
    );
  }
}
DotaRandomApp.contextTypes = {
	store: React.PropTypes.object
};
