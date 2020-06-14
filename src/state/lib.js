export function createAction(type) {
  return [type, payload => ({ type, payload })];
}

export function createReducer(initialState, stateMachine) {
  return (state = initialState, action) => {
    const fn = stateMachine[action.type];
    if (!fn) {
      return state;
    }

    return {
      ...state,
      ...fn(action.payload, state)
    };
  };
}
