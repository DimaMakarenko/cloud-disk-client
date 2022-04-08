const defaultState = {
  currentUser: {},
  isAuth: false,
};

export default function userReducer(state = defaultState, action: { type: string }) {
  switch (action.type) {
    default:
      return state;
  }
}
