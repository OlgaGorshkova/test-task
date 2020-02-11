import { reduxForm } from 'redux-form';
import { View } from './view';
import { createElement } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { StorageState } from '../../redux/reducers';
import { Salary, IStateProps } from './model';

const Form = reduxForm<any, any>({
    form: 'calcuatorForm'
})(View);

export const CalculatorNew = () => {

    const salary = useSelector<StorageState, Salary>(state => ({
        type: +state.form?.calcuatorForm?.values?.salary.type
    }), shallowEqual);

    console.log('salary', salary);


    const props: IStateProps = {
        salary: {...salary},
    };

    return createElement(Form, props);
};
