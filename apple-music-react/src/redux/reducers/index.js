const initialState = {
  user: {
    favourites: [],
  },
  default: {
    artist: ["The Weeknd"],
  },
};

const mainReducer = (store = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        user: {
          ...state.user,
          favourites: state.user,
        },
      };
  }
};
