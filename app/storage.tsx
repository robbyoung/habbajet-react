import AsyncStorage from '@react-native-community/async-storage';
import {State} from './state';
import store from './store';
import {DEFAULT_EDITOR_STATE} from './reducers/habbajetEditor';
import {createTestState} from './state/testState';

const defaultState: State = {
    budget: 0,
    habbajets: [],
    purchases: [],
    habbajetEditor: DEFAULT_EDITOR_STATE,
};

export async function saveState(): Promise<void> {
    const state = store.getState();
    await AsyncStorage.setItem('state', JSON.stringify(state));
}

export async function loadState(): Promise<State> {
    const state = await AsyncStorage.getItem('state');
    let savedState: State;
    if (state !== undefined && state !== null) {
        savedState = JSON.parse(state) as State;
        savedState.purchases = createTestState(0, 10, 0).purchases;
        return savedState;
    }
    return defaultState;
}

export async function clearState() {
    await AsyncStorage.clear();
}
