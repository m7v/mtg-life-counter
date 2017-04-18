import {List} from 'immutable';

function add(state, id) {
  return state.set(id, state);
}

export default function(state = List([]), action) {
  switch (action.type) {
    case 'ADD_GAME':
      return add(state, action.id);
    default:
      return state;
  }
}
