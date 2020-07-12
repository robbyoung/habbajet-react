import habbajets from './habbajets';
import purchases from './purchases';
import budget from './budget';
import habbajetEditor from './habbajetEditor';
import purchaseEditor from './purchaseEditor';
import tagEditor from './tagEditor';
import tags from './tags';
import {combineReducers} from 'redux';

export default combineReducers({
    habbajets,
    purchases,
    budget,
    tags,
    habbajetEditor,
    purchaseEditor,
    tagEditor,
});
