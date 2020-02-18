import { DictionaryItem } from '../../components/customRadioGroup/model';

export interface Salary {
    type: number;
    sum?: number;
    withTax?: number;
    tax?: number;
    sumWithTax?: number;
}

export interface MyData {
    data: {
        name: string,
        officialSite: string,
    }[];
    isFetching: boolean;
}

export interface ITablePaginationActions {
    count: number;
    page: number;
    rowsPerPage: number;
    onChangePage: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

export interface IFormModel {
    type: number;
    withTax: number;
    sumInput?: number;
}

export interface IStateProps {
    salary: Salary;
    types: DictionaryItem[];
    classes: Record<'root' | 'table' | 'formControl' | 'formLabel' | 'group', string>;
    data: MyData;
    rowsPerPage: number;
    page: number;
    handleChangePage: (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => void;
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
