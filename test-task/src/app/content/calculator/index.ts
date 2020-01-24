import { useState} from 'react';

import { View } from './view';
import { IStateProps, Salary } from './model';

export const Calculator = () => {  

    const defaultSalary: Salary = {
        type: 1,    
        sum: 0,
        withTax: 0, 
        switch: 'on',
        tax: 0,
        sumWithTax: 0
    }

    const [salary, setSalary] = useState(defaultSalary);
    const [sumInput, setSumInput] = useState(0);   

    const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSalary = {...salary};
        newSalary.type = +e.target.value;
        setSalary(newSalary);       
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {       
        const newSumInputStr = e.target.value;
        console.log('newSumInputStr', newSumInputStr);

        const newSumInput1 = newSumInputStr.replace(/&nbsp;/g,'').replace(/\s/g,'');
        console.log('newSumInput1', newSumInput1);

        const newSumInput = +newSumInput1;
        console.log('newSumInput', newSumInput);

        setSumInput(newSumInput); 
    };
    
    const onSwitcherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSalary = {...salary};
        newSalary.withTax = newSalary.withTax ? 0 : 1;  
        setSalary(newSalary);
    };


    const newSalary = {...salary};    
    
    if (newSalary.type === 1 && sumInput > 0) {
        if (newSalary.withTax) {
            newSalary.sumWithTax = sumInput;
            newSalary.tax = Math.round(sumInput * 0.13);
            newSalary.sum = newSalary.sumWithTax - newSalary.tax;
        } else {
            newSalary.sum = sumInput;
            newSalary.tax =  Math.round(sumInput * 0.13/0.87);
            newSalary.sumWithTax = newSalary.sum + newSalary.tax;
        }
    } else {
        newSalary.sum = sumInput ? sumInput : 0;
    } 

    console.log('sumInput', sumInput);
    
    const props: IStateProps = {
        salary: newSalary, 
        sumInput: sumInput,       
        onRadioChange: onRadioChange,
        onInputChange: onInputChange,
        onSwitcherChange: onSwitcherChange,
    }

    return View(props);
}