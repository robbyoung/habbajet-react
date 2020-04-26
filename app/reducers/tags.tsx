import {Action} from 'redux';
import {Tag} from '../state';
import {habbajetColors} from '../colors';

export const DEFAULT_TAGS: Tag[] = [
    {name: 'Living', color: habbajetColors[0], id: '0'},
    {name: 'Groceries', color: habbajetColors[1], id: '1'},
    {name: 'Food', color: habbajetColors[2], id: '2'},
    {name: 'Gaming', color: habbajetColors[3], id: '3'},
    {name: 'Books', color: habbajetColors[4], id: '4'},
    {name: 'Tech', color: habbajetColors[5], id: '5'},
];

export default function tagReducer(
    state: Tag[] = DEFAULT_TAGS,
    _action: Action,
): Tag[] {
    return state;
}
