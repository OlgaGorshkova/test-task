import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Switch, { SwitchClassKey, SwitchProps } from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';

interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string;
}

interface Props extends SwitchProps {
  classes: Styles;
}

const MySwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: theme.spacing(1),
        display: 'flex',
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#F9A336',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#F9A336',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid #BABABA`,
      backgroundColor: '#BABABA',
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }),
)(({ classes, ...props }: Props) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    root: {
      marginLeft: '45px',
    },
    label: {
        display: 'flex',
        fontFamily: 'Custom-font-bold, sans-serif',
        color: '#BABABA',
        fontSize: '0.8rem',
    },
  }),
);


export const CustomSwitch = ({ input, labelLeft, labelRight }: {input: any, labelLeft: string, labelRight: string}) => {

    const switchClasses = useStyles();

    return(
        <div>
            <Grid component='label' container alignItems='center' spacing={1} className={switchClasses.root}>
                <Grid item className={switchClasses.label}>{labelLeft}</Grid>
                <Grid item>
                    <MySwitch
                        checked={input.value ? true : false}
                        onChange={input.onChange}
                    />
                </Grid>
                <Grid item className={switchClasses.label}>{labelRight}</Grid>
            </Grid>
        </div>
    );
};
