import { ADD_PLAYER,
  REMOVE_PLAYER,
  INCREASE,
  DECREASE,
  RESET_ALL,
  SET_STATE,
  END_GAME,
  SET_WINNER
} from './actionTypes';

export function addPlayer(name, manaStack) {
  return {
    type: ADD_PLAYER,
    name,
    manaStack
  };
}
export function removePlayer() {
  return {
    type: REMOVE_PLAYER
  };
}

export function increment(id) {
  return {
    type: INCREASE,
    id
  };
}

export function decrement(id) {
  return {
    type: DECREASE,
    id
  };
}

export function resetAll() {
  return {
    type: RESET_ALL
  };
}

export function winner(id) {
  return {
    type: SET_WINNER,
    id
  };
}

export function endGame(players) {
  return {
    type: END_GAME,
    players
  };
}

export function setState() {
  return {
    type: SET_STATE
  };
}