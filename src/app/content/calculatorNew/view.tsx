import * as React from 'react';
import { DictionaryItem, IStateProps } from './model';
import { Field } from 'redux-form';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';

import './style.scss';

export const types: DictionaryItem[] = [
    {id: 1, name: 'Оклад за месяц'},
    {id: 2, name: 'МРОТ'},
    {id: 3, name: 'Оплата за день'},
    {id: 4, name: 'Оплата за час'},
];

export const View = (props: IStateProps ) => {

    const {salary} = props;

    const radioButton = ({ input, ...rest }: {input: number} ) => (
        <FormControl>
            <FormLabel component='legend'>Сумма</FormLabel>
            <RadioGroup {...input} {...rest}>{
                types.map((item, index) => (
                    <FormControlLabel key={index}
                        value={item.id}
                        control={<Radio />}
                        label={item.name}
                        // onChange = {onRadioChange}
                        checked={item.id === salary.type}
                    />
                ))
            }
            </RadioGroup>
        </FormControl>
    );

    return(
      <form >
        <div>
            <Field name='salary.type' component={radioButton} />
        </div>
      </form>
    );
};
