import AsyncStorage from '@react-native-community/async-storage';
import {State} from './state';
import store from './store';

export async function saveState(): Promise<void> {
    const state = store.getState();
    await AsyncStorage.setItem('state', JSON.stringify(state));
}

export async function loadState(): Promise<State | undefined> {
    const state = await AsyncStorage.getItem('state');
    if (state !== undefined && state !== null) {
        return JSON.parse(state) as State;
    }
    return undefined;
}

export async function clearState() {
    await AsyncStorage.clear();
}
