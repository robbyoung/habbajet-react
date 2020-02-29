import habbajets from './habbajets';
import purchases from './purchases';
import budget from './budget';
import { combineReducers } from 'redux';

export default combineReducers({
    habbajets,
    purchases,
    budget,
});
