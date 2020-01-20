import * as React from 'react';
import {Calculator} from './content/calculator';

export class View extends React.Component {

    render() {
        return (
            <div className = "container">  
                <div className="row">
                    <div className="col-sm-4">
                        <Calculator />
                    </div>
                </div>
            </div>
        );
    }
}