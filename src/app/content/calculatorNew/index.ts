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

    const stateModel = useSelector<StorageState, Salary>(state => ({
        type: state.form?.calcuatorForm?.values?.salary.type
    }), shallowEqual);

    const salary = {
        type: stateModel.type ? +stateModel.type : 1,
    };

    console.log('salary', stateModel);

    const props: IStateProps = {
        salary: salary,
    };

    return createElement(Form, props);
};
