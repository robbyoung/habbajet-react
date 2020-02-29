import {Action} from 'redux';
import {Purchase} from '../state';

export default function purchasesReducer(
    state: Purchase[] = [],
    _action: Action,
): Purchase[] {
    return state;
}
