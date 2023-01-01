import { FETCH_JOKE } from "../actions/jokesActions";

const initialState = {
  jokes: [],
  favorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOKE:
      return { ...state, jokes: action.payload };

    default:
      return state;
  }
};

export default reducer;
