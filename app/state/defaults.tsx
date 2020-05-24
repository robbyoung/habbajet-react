import {HabbajetEditor, PurchaseEditor} from '.';
import {habbajetColors} from '../colors';

const EMPTY_FIELD = {
    value: '',
    errorMessage: '',
};

export const DEFAULT_EDITOR_STATE: HabbajetEditor = {
    name: EMPTY_FIELD,
    value: EMPTY_FIELD,
    modifier: EMPTY_FIELD,
    slack: EMPTY_FIELD,
    color: habbajetColors[0],
    validated: false,
};

export const DEFAULT_PURCHASE_EDITOR_STATE: PurchaseEditor = {
    name: EMPTY_FIELD,
    cost: EMPTY_FIELD,
    tagId: '',
    validated: false,
};
