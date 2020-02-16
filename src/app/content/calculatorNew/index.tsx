import * as React from 'react';
import { reduxForm } from 'redux-form';
import { createElement, useEffect, useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import axios from 'axios';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';

import { StorageState } from '../../redux/reducers';
import { Salary, IStateProps, MyData, DictionaryItem } from './model';
import { View } from './view';

const types: DictionaryItem[] = [
    {id: 1, name: 'Оклад за месяц'},
    {id: 2, name: 'МРОТ'},
    {id: 3, name: 'Оплата за день'},
    {id: 4, name: 'Оплата за час'},
];

export const RadioButton = ({ input, currValue, className, ...rest }: {input: any, currValue: number, className: string} ) => (
    <FormControl>
        <RadioGroup {...input} {...rest}>{
            types.map((item, index) => (
                <FormControlLabel key={index}
                    className={className}
                    value={item.id}
                    control={<Radio />}
                    label={item.name}
                    checked={item.id === currValue}
                />
            ))
        }
        </RadioGroup>
    </FormControl>
);

const Form = reduxForm<any, any>({
    form: 'calcuatorForm'
})(View);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    root: {
        display: 'flex',
        fontFamily: 'Custom-font, sans-serif',
    },
    formControl: {
        margin: theme.spacing(2),
    },
    formLabel: {
        fontFamily: 'Custom-font, sans-serif',
        color: '#BABABA',
    },
    group: {
        margin: theme.spacing(0),
        '& span': {
            padding: '5px',
            fontFamily: 'Custom-font-bold, sans-serif',
        },
        '& input': {
            color: '#BABABA',
            '&:checked + div': {
                color: '#BABABA',
            },
        }
    },
    table: {
        width: '510px',
        '& .MuiTablePagination-spacer' : {
            flex: '1 1',
        }
    }
  }),
);


const initialData: MyData = {
    data: [],
    isFetching: false
};
const TEST_URL = 'http://api.tvmaze.com/shows?page=1';


export const CalculatorNew = () => {

    const classes = useStyles();
    const [data, setData] = useState(initialData);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(0);

    const stateModel = useSelector<StorageState, Salary>(state => ({
        type: state.form?.calcuatorForm?.values?.salary.type
    }), shallowEqual);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const salary = {
        type: stateModel.type ? +stateModel.type : 1,
    };

    const props: IStateProps = {
        salary: salary,
        classes: classes,
        data: data,
        rowsPerPage: rowsPerPage,
        page: page,
        handleChangePage: handleChangePage,
        handleChangeRowsPerPage: handleChangeRowsPerPage,
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setData({data: data.data, isFetching: true});
                const response = await axios.get(TEST_URL);
                setData({data: response.data, isFetching: true});
            } catch (e) {
                console.log(e);
                setData({data: data.data, isFetching: false});
            }
        };

        fetchData();
    }, []);

    return createElement(Form, props);
};
