import habbajets from './habbajets';
import purchases from './purchases';
import budget from './budget';
import habbajetEditor from './habbajetEditor';
import purchaseEditor from './purchaseEditor';
import tags from './tags';
import {combineReducers} from 'redux';

export default combineReducers({
    habbajets,
    purchases,
    budget,
    habbajetEditor,
    purchaseEditor,
    tags,
});
