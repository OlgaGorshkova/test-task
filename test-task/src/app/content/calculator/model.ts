export interface DictionaryItem {
    id: number;
    name: string;
}

export interface Salary{
    type: number;    
    sum: number;
    withTax: number;
    tax?: number;
    sumWithTax?: number;
    switch: string;   
}

export interface IStateProps {
    salary: Salary;
    sumInput: number;   
    onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onRadioChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSwitcherChange?: (value: any) => void;
}