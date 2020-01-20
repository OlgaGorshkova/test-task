import { useState} from 'react';

import { View } from './view';
import { IStateProps } from './model';

export const Calculator = () => {
    const [salaryType, setSalaryType] = useState(1);   

    const onRadioChange = (e: any) => {
        const newValue: number = e.target.value;
        setSalaryType(newValue);  
    };

    const props: IStateProps = {
        type: salaryType,
        value: 40000,
        withTax: false,
        tax: 5977,
        onRadioChange: onRadioChange,
    }

    return View(props);
}