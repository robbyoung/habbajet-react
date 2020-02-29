export interface Habbajet {
    name: string;
    value: number;
    days: boolean[];
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
