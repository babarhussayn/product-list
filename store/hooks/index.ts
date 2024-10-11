import {
  useDispatch,
  useSelector,
  TypedUseSelectorHook,
  useStore,
} from "react-redux";
import type { RootState, AppDispatch, AppStore } from "../store"; // Adjust the path as necessary

// Create a typed version of useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Create a typed version of useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Create a typed version of useStore
export const useAppStore = () => useStore<AppStore>();
