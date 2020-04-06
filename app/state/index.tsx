export interface Habbajet {
    name: string;
    maxValue: number;
    currentValue: number;
    factor: number;
    results: boolean[];
    color: string;
    date: string;
    toClaim: boolean;
    selected: boolean;
    currentStreak: number;
    bestStreak: number;
}

export interface Purchase {
    name: string;
    value: number;
}

export interface EditorField {
    value: string;
    errorMessage: string;
}

export interface HabbajetEditor {
    name: EditorField;
    value: EditorField;
    color: string;
}

export interface State {
    habbajets: Habbajet[];
    purchases: Purchase[];
    habbajetEditor: HabbajetEditor;
    budget: number;
}
