import { useState } from 'react';

import { View } from './view';
import { IStateProps, Salary } from './model';

export const CalculatorNew = () => {

    const defaultSalary: Salary = {
        type: 1,
        sum: 0,
        withTax: 0,
        tax: 0,
        sumWithTax: 0
    };

    const [salary, setSalary] = useState(defaultSalary);
    const [sumInput, setSumInput] = useState(0);
    const [fixInfo, setFixInfo] = useState(false);

    const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSalaryR = {...salary};
        newSalaryR.type = +e.target.value;
        setSalary(newSalaryR);
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSumInputStr = e.target.value;
        const newSumInput1 = newSumInputStr.replace(/&nbsp;/g, '').replace(/\s/g, '');
        const newSumInput =  +newSumInput1;
        if (!isNaN(newSumInput)) {
            setSumInput(newSumInput);
        }
    };

    const onSwitcherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSalaryS = {...salary};
        newSalaryS.withTax = newSalaryS.withTax ? 0 : 1;
        setSalary(newSalaryS);
    };

    const onInfoClick = () => {
        setFixInfo(!fixInfo);
    };

    const newSalary = {...salary};

    if (newSalary.type === 1 && sumInput > 0) {
        if (newSalary.withTax) {
            newSalary.sumWithTax = sumInput;
            newSalary.tax = Math.round(sumInput * 0.13);
            newSalary.sum = newSalary.sumWithTax - newSalary.tax;
        } else {
            newSalary.sum = sumInput;
            newSalary.tax =  Math.round(sumInput * 0.13 / 0.87);
            newSalary.sumWithTax = newSalary.sum + newSalary.tax;
        }
    } else {
        newSalary.sum = sumInput ? sumInput : 0;
    }

    const props: IStateProps = {
        salary: newSalary,
        sumInput: sumInput,
        fixInfo: fixInfo,
        onRadioChange: onRadioChange,
        onInputChange: onInputChange,
        onSwitcherChange: onSwitcherChange,
        onInfoClick: onInfoClick,
    };

    return View(props);
};
