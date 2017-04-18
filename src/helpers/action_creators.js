export function addCounter() {
  return {
    type: 'ADD_COUNTER'
  };
}
export function removeCounter() {
  return {
    type: 'REMOVE_COUNTER'
  };
}

export function increment(id) {
  return {
    type: 'INCREASE',
    id
  };
}

export function decrement(id) {
  return {
    type: 'DECREASE',
    id
  };
}

export function resetAll() {
  return {
    type: 'RESET_ALL'
  };
}

export function setState() {
  return {
    type: 'SET_STATE'
  };
}