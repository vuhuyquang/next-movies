import store from './configureStore';

export type IRootState = ReturnType<typeof store.getState>;
export type IDispatch = typeof store.dispatch;
