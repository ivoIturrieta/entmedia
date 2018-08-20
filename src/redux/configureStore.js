import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import monitorReducersEnhancer from "./enhancers/monitorReducer";
import loggerMiddleware from "./middleware/logger";
import rootReducer from "./reducers/rootReducer";

const configureStore = preloadedState => {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = compose(...enhancers);
  const store = createStore(rootReducer, preloadedState, composedEnhancers);
  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers/rootReducer.js", () =>
      store.replaceReducer(rootReducer)
    );
  }
  return store;
};
export default configureStore;
