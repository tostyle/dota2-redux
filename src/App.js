import React, { Component } from 'react';
import { createStore,applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { getRandom,fetchPostsIfNeeded } from './action';
import { randomHero } from './reducer';


const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  createLogger()
)(createStore)


const store = createStoreWithMiddleware(randomHero);
// console.log(startRandom);

// var  data = getRandom();
// data.then( (res) => { console.log(res)} );
// console.log(data);
store.dispatch( getRandom() );
store.subscribe( () => {
	console.log('xxxxxxxxxxxxxxxxxxxxxxx');
	console.log( store.getState() );
} );
export default class DotaRandomApp extends Component {
  render() {
    return (
      <h1>Hello, world.sss </h1>
    );
  }
}