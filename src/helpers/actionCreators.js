import {
  ADD_PLAYER,
  REMOVE_PLAYER,
  INCREASE,
  DECREASE,
  RESET_ALL,
  SET_STATE,
  NEXT_HERO,
  PREV_HERO
} from './actionTypes';

export function addPlayer() {
  return {
    type: ADD_PLAYER
  };
}
export function removePlayer() {
  return {
    type: REMOVE_PLAYER
  };
}

export function nextHero(id) {
  return {
    type: NEXT_HERO,
    id
  };
}
export function prevHero(id) {
  return {
    type: PREV_HERO,
    id
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

export function setState() {
  return {
    type: SET_STATE
  };
}