const initial = {
  items: {},
  top: new Array(10)
};

export default function(state = initial, action) {
  switch (action.type) {
    case "LOADED_TOP":
      return {
        ...state,
        top: action.top
      };
    case "LOADED_ITEM":
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
