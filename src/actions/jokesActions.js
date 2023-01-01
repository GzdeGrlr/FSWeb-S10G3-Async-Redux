export const FETCH_JOKE = "FETCH_JOKE";

export const fetchJoke = () => {
  return (dispatch) => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: FETCH_JOKE, payload: data });
      });
  };
};
