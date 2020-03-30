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
}

export interface Purchase {
    name: string;
    value: number;
}

export interface State {
    habbajets: Habbajet[];
    purchases: Purchase[];
    budget: number;
}
