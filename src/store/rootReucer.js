import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';

import usersReducer from '@modules/users/reducer';

/**
 * Root reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const appReducer = combineReducers({
    users: usersReducer,
});
const rootReducer = (state, action) => {
    if (action.type === 'RESET') {
        // for all keys defined in your persistConfig(s)
        AsyncStorage.removeItem('persist:root');
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
};
export default rootReducer;
