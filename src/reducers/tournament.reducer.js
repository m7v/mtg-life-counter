import {List} from 'immutable';
import { END_GAME } from '../helpers/actionTypes';

function endGame(state, players) {
  debugger;
  return state.push(players);
}

export default function(state = List([]), action) {
  switch (action.type) {
    case END_GAME:
      return endGame(state, action.players);
    default:
      return state;
  }
}
