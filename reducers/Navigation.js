import Routes from '../src/Routes';

export default (state, action) => {
  const newState = Routes.router.getStateForAction(action, state);
  return newState || state;
}