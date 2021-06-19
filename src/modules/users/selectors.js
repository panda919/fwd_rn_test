import { createSelector } from 'reselect';
import { List } from 'immutable';

export const users = (state) => state.users;
export const usersSelector = createSelector(users, (data) => data.get('users') || List());
