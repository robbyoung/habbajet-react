export interface Habbajet {
    name: string;
    value: number;
    successes: number;
    color: string;
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
