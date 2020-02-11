export interface DictionaryItem {
    id: number;
    name: string;
}

export interface Salary {
    type: number;
    sum?: number;
    withTax?: number;
    tax?: number;
    sumWithTax?: number;
}

export interface IStateProps {
    salary: Salary;
}
