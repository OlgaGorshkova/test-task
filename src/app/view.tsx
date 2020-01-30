import * as React from 'react';
import {CalculatorNew} from './content/calculatorNew';
import './style.scss';

export class View extends React.Component {

    render() {
        return (
            <div className = 'container app primary'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <CalculatorNew />
                    </div>
                </div>
            </div>
        );
    }
}
