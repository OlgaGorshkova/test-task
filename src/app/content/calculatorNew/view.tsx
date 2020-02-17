import * as React from 'react';
import {IStateProps } from './model';
import { Field } from 'redux-form';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

import { CustomRadioGroup } from '../../components/customRadioGroup';
import { TablePaginationActions } from '../../components/tablePaginationActions';

export const View = (props: IStateProps ) => {
    const {salary, types, classes, data, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage } = props;

    return(
        <Container>
            <form className={classes.root}>
                <FormControl component='fieldset' className={classes.formControl}>
                    <FormLabel component='legend' className={classes.formLabel}>Сумма</FormLabel>
                    <Field
                        name='salary.type'
                        component={CustomRadioGroup}
                        currValue={salary.type}
                        className={classes.group}
                        values={types}
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
