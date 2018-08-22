export default function coworksReducer(state = {}, action) {
  switch (action.type) {
    case "SELECT_SUBREDDIT":
      return action.subreddit;
    default:
      return state;
  }
}
