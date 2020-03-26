export interface Habbajet {
    name: string;
    maxValue: number;
    currentValue: number;
    factor: number;
    successes: number;
    color: string;
    date: string;
    toClaim: boolean;
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
