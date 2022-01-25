import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootStateType} from "../redux/redux-store";

// custom hook to use Selector with types
export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector