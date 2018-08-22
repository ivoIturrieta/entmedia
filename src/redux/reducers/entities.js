import { types } from "../actions/entities";

const initialState = {
  entities: {
    articles: {
      allIds: [],
      byId: {}
    }
  }
};
const entities = (state = initialState, action) => {
  switch (action.type) {
    case types.RECEIVED_ENTITIES: {
      Object.keys(action.payload.articles).map(articleId => {
        const newArticleArr = [
          ...state.entities.articles,
          state.entities.articles.allIds.concat(articleId)
        ];
        //eslint-disable-next-line
        debugger;
        return {
          allIds: [...state.entities.articles, ...newArticleArr]
        };
      });

      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });
    }

    default:
      return state;
  }
};

export default entities;
