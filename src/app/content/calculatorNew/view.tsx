import * as React from 'react';
import { DictionaryItem, IStateProps } from './model';
import { Field } from 'redux-form';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

// import './style.scss';

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

interface MyData {
    data: {
        name: string,
        officialSite: string,
    }[];
    isFetching: boolean;
}

interface ITablePaginationActions {
    count: number;
    page: number;
    rowsPerPage: number;
    onChangePage: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

const types: DictionaryItem[] = [
    {id: 1, name: 'Оклад за месяц'},
    {id: 2, name: 'МРОТ'},
    {id: 3, name: 'Оплата за день'},
    {id: 4, name: 'Оплата за час'},
];

const radioButton = ({ input, currValue, className, ...rest }: {input: any, currValue: number, className: string} ) => (
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

const TablePaginationActions = (props: ITablePaginationActions ) => {
    const { count, page, rowsPerPage, onChangePage } = props;

    const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onChangePage(event, 0);
      };

      const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onChangePage(event, page - 1);
      };

      const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onChangePage(event, page + 1);
      };

      const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
      };

      return (
        <div>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label='Начальная стр.'
            >
                {<LastPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label='Предыдущая стр.'>
                {<KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label='Следующая стр.'
            >
                {<KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label='Последняя стр.'
            >
                {<FirstPageIcon />}
            </IconButton>
        </div>
      );
};

export const View = (props: IStateProps ) => {
    const {salary} = props;

    const TEST_URL = 'http://api.tvmaze.com/shows?page=1';
    const initialData: MyData = {
        data: [],
        isFetching: false
    };

    const classes = useStyles();
    const [data, setData] = useState(initialData);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
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

    return(
        <Container>
            <form className={classes.root}>
                <FormControl component='fieldset' className={classes.formControl}>
                    <FormLabel component='legend' className={classes.formLabel}>Сумма</FormLabel>
                    <Field
                        name='salary.type'
                        component={radioButton}
                        currValue={salary.type}
                        className={classes.group}
                    />
                </FormControl>
            </form>
            <Table size='small' aria-label='fetched data' className={classes.table}>
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align='right'>Site</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {(rowsPerPage > 0 ?
                    data.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) :
                    data.data)
                    .map((item: any, index) => (
                        <TableRow key={index}>
                            <TableCell component='th' scope='row'>{item.name}</TableCell>
                            <TableCell align='right'>{item.officialSite}</TableCell>
                        </TableRow>
                ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, 50, { label: 'All', value: -1 }]}
                            colSpan={0}
                            count={data.data.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: { 'aria-label': 'Строк на странице' },
                                native: true,
                            }}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </Container>
    );

};
