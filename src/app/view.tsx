import * as React from 'react';
import {CalculatorNew} from './content/calculatorNew';
import {Calculator} from './content/calculator';
import './style.scss';

export class View extends React.Component {

    render() {
        return (
            <div className = 'container app primary'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <CalculatorNew />
                    </div>
                    <div className='col-sm-6'>
                        <Calculator/>
                    </div>
                </div>
            </div>
        );
    }
}
