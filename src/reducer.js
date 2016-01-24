import { START_RANDOM ,FINISH_RANDOM,GET_RANDOM } from './action';

export function randomHero( state = { 
	isFetching: false,
	hero: {}
	} , action ){
	switch(action.type)
	{
		case FINISH_RANDOM:
			return {...state,
						hero : action.hero.heroes[0]};
		case GET_RANDOM: 
			console.log(action.hero);
			return {...state,
						hero : action.hero};
		case START_RANDOM:
			return {...state , isFetching: true};
		default:
			return state;
	}
}