import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';


const CSSTextField = withStyles({
    root: {
        '& label.Mui-focused': {
        color: '#212529',
        },
        '& input': {
            padding: '6px 20px',
            fontFamily: 'Custom-font-bold, sans-serif',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#BABABA',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
            borderColor: '#BABABA',
            borderWidth: '1px',
            borderRadius: '50px',
            },
            '&:hover fieldset': {
            borderColor: '#BABABA',
            borderWidth: '1px',
            },
            '&.Mui-focused fieldset': {
            borderColor: '#BABABA',
            borderWidth: '1px',
            },
        },
    },
})(TextField);

export const CustomInput = ({
        label,
        input,
        variant,
        ...custom
    }: {
        label: string,
        input: any,
        variant: string,
        custom: any
    }) => {
            return (
                <CSSTextField
                        label={label}
                        variant={variant}
                        {...input}
                        {...custom}
                />
            );
    };
