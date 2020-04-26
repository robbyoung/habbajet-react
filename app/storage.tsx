import AsyncStorage from '@react-native-community/async-storage';
import {State} from './state';
import store from './store';
import {DEFAULT_EDITOR_STATE} from './reducers/habbajetEditor';
import {DEFAULT_PURCHASE_EDITOR_STATE} from './reducers/purchaseEditor';

const defaultState: State = {
    budget: 0,
    habbajets: [],
    purchases: [],
    tags: [],
    habbajetEditor: DEFAULT_EDITOR_STATE,
    purchaseEditor: DEFAULT_PURCHASE_EDITOR_STATE,
};

export async function saveState(): Promise<void> {
    const state = store.getState();
    await AsyncStorage.setItem('state', JSON.stringify(state));
}

export async function loadState(): Promise<State> {
    const state = await AsyncStorage.getItem('state');
    if (state !== undefined && state !== null) {
        return JSON.parse(state) as State;
    }
    return defaultState;
}

export async function clearState() {
    await AsyncStorage.clear();
}
