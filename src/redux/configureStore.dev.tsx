import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import rootSaga, {rootReducer} from './duck/index';
import sagaMiddleware from './middlewares/saga';
import counterReducer from './duck/Count/counterSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['counter'],
};

const logger = (store: any) => (next: any) => (action: any) => {
  let result = next(action);
  return result;
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [
  ...getDefaultMiddleware({
    thunk: false,
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  sagaMiddleware,
  logger,
];
export default function configurestore() {
  const store = configureStore({
    reducer: persistedReducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
  });
  let persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return {store, persistor};
}

const {store} = configurestore();
// export const store = configureStore({
//   reducer: rootReducer,
//   middleware,
//   devTools: process.env.NODE_ENV !== 'production',
// });
// sagaMiddleware.run(rootSaga);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
