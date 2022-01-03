import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootReducerType} from "../redux/redux-store";

// custom hook to use Selector with types
export const useTypedSelector: TypedUseSelectorHook<RootReducerType> = useSelector