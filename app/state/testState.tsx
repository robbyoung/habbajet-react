import {
    State,
    Habbajet,
    Purchase,
    HabbajetEditor,
    Tag,
    PurchaseEditor,
    TagEditor,
} from '.';
import {habbajetColors} from '../colors';

export function createTestState(
    numHabbajets: number,
    numPurchases: number,
    budget: number,
    selectedIndex: number = -1,
): State {
    const habbajets: Habbajet[] = [];
    for (let i = 0; i < numHabbajets; i++) {
        habbajets.push({
            id: `${i}`,
            name: `Habbajet ${i}`,
            maxValue: 100,
            currentValue: 100,
            modifier: 2,
            results: [],
            color: habbajetColors[i % habbajetColors.length],
            date: '2020-03-22T11:00:00.000Z',
            toClaim: false,
            selected: i === selectedIndex,
            currentStreak: 0,
            bestStreak: 5,
            oldStreaks: [0, 5],
            totalSlack: 0,
            remainingSlack: 0,
            description: '',
        });
    }

    const purchases: Purchase[] = [];
    for (let i = 0; i < numPurchases; i++) {
        purchases.push({
            id: `${i}`,
            name: `Purchase ${i}`,
            cost: i,
            date: '2020-03-22T11:00:00.000Z',
            tagId: `${i % 10}`,
        });
    }

    const tags: Tag[] = [];
    for (let i = 0; i < 10; i++) {
        tags.push({
            id: `${i}`,
            name: `Tag ${i}`,
            color: habbajetColors[i % habbajetColors.length],
        });
    }

    const EMPTY_FIELD = {
        value: '',
        errorMessage: '',
    };
    const habbajetEditor: HabbajetEditor = {
        name: {...EMPTY_FIELD},
        description: {...EMPTY_FIELD},
        value: {...EMPTY_FIELD},
        modifier: {...EMPTY_FIELD},
        slack: {...EMPTY_FIELD},
        color: habbajetColors[0],
        validated: false,
    };

    const purchaseEditor: PurchaseEditor = {
        name: {...EMPTY_FIELD},
        cost: {...EMPTY_FIELD},
        tagId: '',
        validated: false,
    };

    const tagEditor: TagEditor = {
        name: {...EMPTY_FIELD},
        color: habbajetColors[0],
        validated: false,
    };

    return {
        habbajets,
        purchases,
        budget,
        habbajetEditor,
        purchaseEditor,
        tagEditor,
        tags,
    };
}

export function createTestEditor(
    name: string,
    value: string,
    modifier: string,
    slack = '0',
    validated = false,
): HabbajetEditor {
    return {
        name: {
            value: name,
            errorMessage: '',
        },
        description: {
            value: '',
            errorMessage: '',
        },
        value: {
            value,
            errorMessage: '',
        },
        modifier: {
            value: modifier,
            errorMessage: '',
        },
        slack: {
            value: slack,
            errorMessage: '',
        },
        color: habbajetColors[0],
        validated,
    };
}

export function createTestPurchaseEditor(
    name: string,
    value: string,
    validated = false,
): PurchaseEditor {
    return {
        name: {
            value: name,
            errorMessage: '',
        },
        cost: {
            value,
            errorMessage: '',
        },
        tagId: '0',
        validated,
    };
}

export function createTestTagEditor(
    name: string,
    validated = false,
): TagEditor {
    return {
        name: {
            value: name,
            errorMessage: '',
        },
        color: '#000000',
        validated,
    };
}
