import * as React from 'react';
import {Calculator} from './content/calculator';
import './style.scss';

export class View extends React.Component {

    render() {
        return (
            <div className = "container app">  
                <div className="row">
                    <div className="col-sm-4">
                        <Calculator />
                    </div>
                </div>
            </div>
        );
    }
}