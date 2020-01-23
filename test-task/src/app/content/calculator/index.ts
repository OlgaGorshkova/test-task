import { useState} from 'react';

import { View } from './view';
import { IStateProps, Salary } from './model';

export const Calculator = () => {  

    const defaultSalary: Salary = {
        type: 1,    
        sum: 0,
        withTax: 0, 
        switch: 'on',
    }

    const [salary, setSalary] = useState(defaultSalary);
    const [sumInput, setSumInput] = useState(0);

    const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSalary = {...salary};
        newSalary.type = +e.target.value;
        setSalary(newSalary);       
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {        
        const newSumInput = +e.target.value;
        setSumInput(newSumInput);  
        const num = newSumInput;
        console.log('number', num.toLocaleString('ru-RU', {style:'currency', currency: 'RUB'}));
    };
    
    const onSwitcherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSalary = {...salary};
        newSalary.withTax = newSalary.withTax ? 0 : 1;  
        setSalary(newSalary);
    };


    const newSalary = {...salary};    
    
    if (newSalary.type === 1) {
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
        newSalary.sum = sumInput;
    } 
    
    const props: IStateProps = {
        salary: newSalary, 
        sumInput: sumInput,       
        onRadioChange: onRadioChange,
        onInputChange: onInputChange,
        onSwitcherChange: onSwitcherChange,
    }

    return View(props);
}