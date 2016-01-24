import fetch from 'isomorphic-fetch';
export const START_RANDOM = 'START_RANDOM'
export const FINISH_RANDOM = 'FINISH_RANDOM'
export const GET_RANDOM = 'GET_RANDOM'
// fetch('http://localhost:3001/').then(response => response)
export function getRandom()
{
	let steamAPI = "http://localhost:3001/";

	return dispatch => { 
		// console.log(dispatch)
	    dispatch( startRandom() )
	    return fetch(steamAPI)
	      .then(response => response.json())
	      .then(json => dispatch( finishRandom(json) ) )
	}
}
export function fetchPostsIfNeeded() {
  return (dispatch, getState) => {
    console.log(dispatch);
    return {};
  }
}
export function startRandom(){
	return {
		type: START_RANDOM
	}
}
export function finishRandom(hero){
	// console.log(hero.result);
	return {
		type: FINISH_RANDOM,
		hero: hero.result
	}
}