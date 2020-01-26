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
    fixInfo: boolean;    
    onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onRadioChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSwitcherChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onInfoClick?: () => void;
}