export interface DictionaryItem {
    id: number;
    name: string;
}

export interface Salary{
    type: number;    
    sum: number;
    withTax: boolean;
    tax?: number;
    sumWithTax?: number;   
}

export interface IStateProps {
    salary: Salary;
    sumInput: number;
    onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onRadioChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSwitcherChange?: (value: any) => void;
}