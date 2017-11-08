const initial = {};

export default function(state = initial, action) {
  switch (action.type) {
    case "LOAD":
      return {
        ...state,
        items: action.items
      };
    default:
      return state;
  }
}
