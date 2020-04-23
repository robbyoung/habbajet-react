import AsyncStorage from '@react-native-community/async-storage';
import {State, Tag} from './state';
import store from './store';
import {DEFAULT_EDITOR_STATE} from './reducers/habbajetEditor';
import {DEFAULT_PURCHASE_EDITOR_STATE} from './reducers/purchaseEditor';
import {habbajetColors} from './colors';

const startingTags: Tag[] = [
    {name: 'Rent', color: habbajetColors[0], id: '0'},
    {name: 'Groceries', color: habbajetColors[1], id: '1'},
    {name: 'Snacks', color: habbajetColors[2], id: '2'},
    {name: 'Gaming', color: habbajetColors[3], id: '3'},
    {name: 'Books', color: habbajetColors[4], id: '4'},
];

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
    let savedState: State;
    if (state !== undefined && state !== null) {
        savedState = JSON.parse(state) as State;
        savedState.tags = startingTags;
        return savedState;
    }
    return defaultState;
}

export async function clearState() {
    await AsyncStorage.clear();
}
