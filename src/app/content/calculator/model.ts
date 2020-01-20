export interface DictionaryItem {
    id: number;
    name: string;
}

export interface Salary{
    type: number;    
    value: number;
    withTax: boolean;
    tax?: number;   
}

export interface IStateProps extends Salary{
    onInputChange?: (value: number) => void;
    onRadioChange?: (value: any) => void;
    onSwitcherChange?: (value: any) => void;
}