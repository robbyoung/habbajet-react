export enum HabitResult {
    Success,
    SlackSuccess,
    Failure,
}

export interface Habbajet {
    id: string;
    name: string;
    maxValue: number;
    currentValue: number;
    modifier: number;
    results: HabitResult[];
    color: string;
    date: string;
    toClaim: boolean;
    selected: boolean;
    currentStreak: number;
    bestStreak: number;
    oldStreaks: [number, number];
    totalSlack: number;
    remainingSlack: number;
}

export interface Purchase {
    id: string;
    name: string;
    cost: number;
    date: string;
    tagId: string;
}

export interface EditorField {
    value: string;
    errorMessage: string;
}

export interface HabbajetEditor {
    name: EditorField;
    value: EditorField;
    modifier: EditorField;
    slack: EditorField;
    color: string;
    validated: boolean;
}

export interface PurchaseEditor {
    name: EditorField;
    cost: EditorField;
    tagId: string;
    validated: boolean;
    id?: string;
}

export interface Tag {
    id: string;
    name: string;
    color: string;
}

export interface State {
    habbajets: Habbajet[];
    purchases: Purchase[];
    tags: Tag[];
    habbajetEditor: HabbajetEditor;
    purchaseEditor: PurchaseEditor;
    budget: number;
}
