import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    // if (state.count) nextState.count = state.count // preserve count value on client side navigation
    return nextState
  } else {
    return rootReducer(state, action)
  }
}

export const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(reducer, bindMiddleware([sagaMiddleware]))

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}
// const makeStore = (initialState) => {
//   const sagaMiddleware = createSagaMiddleware();
//   const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
//   const store = createStore(
//     combineReducers(reducers),
//     initialState,
//     composeEnhancers(applyMiddleware(sagaMiddleware)),
//   );

//   store.runSaga = () => {
//     // Avoid running twice
//     if (store.saga) return;
//     store.saga = sagaMiddleware.run(rootSaga);
//   };

//   store.stopSaga = async () => {
//     // Avoid running twice
//     if (!store.saga) return;
//     store.dispatch(END);
//     await store.saga.done;
//     store.saga = null;
//   };

//   store.execSagaTasks = async (isServer, tasks) => {
//     // run saga
//     store.runSaga();
//     // dispatch saga tasks
//     tasks(store.dispatch);
//     // Stop running and wait for the tasks to be done
//     await store.stopSaga();
//     // Re-run on client side
//     if (!isServer) {
//       store.runSaga();
//     }
//   };

//   // Initial run
//   store.runSaga();

//   return store;
// };

export const wrapperStoreSaga = createWrapper(makeStore, { debug: true })
