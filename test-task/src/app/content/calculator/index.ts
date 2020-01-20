import { useState} from 'react';

import { View } from './view';
import { IStateProps, Salary } from './model';

export const Calculator = () => {  

    const defaultSalary: Salary = {
        type: 1,    
        sum: 0,
        withTax: true,       
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
    }

    return View(props);
}