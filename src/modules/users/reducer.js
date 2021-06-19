import { fromJS } from 'immutable';
import Reactotron from 'reactotron-react-native';
import { handleActions, combineActions } from 'redux-actions';
import { concatNewUsers, resetUsers } from './actions';

const initState = fromJS({
    users: [],
});
// REDUCERS
export default handleActions(
    {
        [combineActions(concatNewUsers)]: (state, action) => {
            const { payload: newUsers } = action;
            const newState = state.update('users', (data) => data.concat(fromJS(newUsers)));

            if (__DEV__) {
                Reactotron.display({
                    name: 'Action',
                    value: { ...action, oldState: state, newState },
                    preview: action.type,
                    important: true,
                });
            }
            return newState;
        },
        [combineActions(resetUsers)]: (state, action) => {
            const newState = state.set('users', fromJS([]));

            if (__DEV__) {
                Reactotron.display({
                    name: 'Action',
                    value: { ...action, oldState: state, newState },
                    preview: action.type,
                    important: true,
                });
            }
            return newState;
        },
    },
    initState,
);
