import {
  TypedUseSelectorHook,
  useDispatch as useDispatchCore,
  useSelector as useSelectorCore,
} from 'react-redux';
import type { IRootState, IDispatch } from './index';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch: () => IDispatch = useDispatchCore;
export const useSelector: TypedUseSelectorHook<IRootState> = useSelectorCore;
