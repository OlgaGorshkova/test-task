export interface DictionaryItem {
    id: number;
    name: string;
}

export interface IStateProps {
    input: any;
    rest: any;
    currValue: number;
    values: DictionaryItem[];
    className?: string;
}
