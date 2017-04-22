import {List, Map} from 'immutable';
import {
  ADD_PLAYER,
  REMOVE_PLAYER,
  INCREASE,
  DECREASE,
  RESET_ALL,
  SET_STATE,
  MAX_PLAYERS,
  MIN_PLAYERS,
  NEXT_HERO,
  PREV_HERO
} from '../helpers/actionTypes';
import {HEROLIST} from "../helpers/heroList";

function nextHero(state, id) {
  const player = state.get(id);
  const position = player.get('position');
  if (HEROLIST.size !==  position + 1) {
    const newPlayer = player.set('position', position + 1);
    const newHero = HEROLIST.get(newPlayer.get('position'));
    return state.set(id, newPlayer.set('currentHero', newHero));
  }
  else {
    const newPlayer = player.set('position', 0);
    const newHero = HEROLIST.get(newPlayer.get('position'));
    return state.set(id, newPlayer.set('currentHero', newHero));
  }
}

function prevHero(state, id) {
  const player = state.get(id);
  const position = player.get('position');
  if (position - 1 > 0) {
    const newPlayer = player.set('position', position - 1);
    const newHero = HEROLIST.get(newPlayer.get('position'));
    return state.set(id, newPlayer.set('currentHero', newHero));
  }
  else {
    const heroCount = HEROLIST.size;
    const newPlayer = player.set('position', heroCount - 1);
    const newHero = HEROLIST.get(newPlayer.get('position'));
    return state.set(id, newPlayer.set('currentHero', newHero));
  }
}

function increase(state, id) {
  const player = state.get(id);
  return state.set(id, player.set('life', player.get('life') + 1));
}

function decrease(state, id) {
  const player = state.get(id);
  return state.set(id, player.set('life', player.get('life') - 1));
}

function addPlayer(state) {
  if (state.size !== MAX_PLAYERS) {
    return state.push(Map({
      life: 20,
      position: state.size,
      currentHero: HEROLIST.get(state.size)
    }));
  }
  return state;
}

function removePlayer(state) {
  if (state.size !== MIN_PLAYERS) {
    return state.pop();
  }
  return state
}

function resetAll(state) {
  return state.map(player => player.set('life', 20))
}

function setState(state, newState) {
  return state.merge(newState);
}

export default function(state = List([]), action) {
  switch (action.type) {
    case INCREASE:
      return increase(state, action.id);
    case DECREASE:
      return decrease(state, action.id);
    case ADD_PLAYER:
      return addPlayer(state);
    case REMOVE_PLAYER:
      return removePlayer(state);
    case RESET_ALL:
      return resetAll(state);
    case SET_STATE:
      return setState(state, action.newState);
    case NEXT_HERO:
      return nextHero(state, action.id);
    case PREV_HERO:
      return prevHero(state, action.id);
    default:
      return state;
  }
}
