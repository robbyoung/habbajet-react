export interface Habbajet {
    name: string;
    maxValue: number;
    currentValue: number;
    modifier: number;
    results: boolean[];
    color: string;
    date: string;
    toClaim: boolean;
    selected: boolean;
    currentStreak: number;
    bestStreak: number;
    totalSlack: number;
    remainingSlack: number;
}

export interface Purchase {
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
    color: string;
    validated: boolean;
}

export interface PurchaseEditor {
    name: EditorField;
    cost: EditorField;
    tagId: string;
    validated: boolean;
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
