import * as React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';

import { IStateProps } from './model';

export const CustomRadioGroup = (props: IStateProps ) => (
    <FormControl>
        <RadioGroup {...props.input} {...props.rest}>{
            props.values.map((item, index) => (
                <FormControlLabel key={index}
                    className={props.className ? props.className : ''}
                    value={item.id}
                    control={<Radio />}
                    label={item.name}
                    checked={item.id === props.currValue}
                />
            ))
        }
        </RadioGroup>
    </FormControl>
);
