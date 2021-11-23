import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import ActionCreators from '../redux/action-creators'


// custom hook to use dispatch
export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}