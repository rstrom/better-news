const initial = {
  id: null,
  items: {},
  top: []
};

export default function(state = initial, action) {
  switch (action.type) {
    case "ROUTED":
      return {
        ...state,
        id: action.id
      };
    case "LOADED_TOP":
      return {
        ...state,
        top: action.top
      };
    case "FETCH_ITEM":
      return {
        ...state,
        items: {
          ...state.items,
          [action.id]: action.item
        }
      };
    default:
      return state;
  }
}
