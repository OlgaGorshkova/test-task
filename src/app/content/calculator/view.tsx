import * as React from 'react';
import { IStateProps, DictionaryItem } from './model'

import './style.scss';

export const types: DictionaryItem[] = [
    {id: 1, name: 'Оклад за месяц'},
    {id: 2, name: 'МРОТ'},
    {id: 3, name: 'Оплата за день'},
    {id: 4, name: 'Оплата за час'},
];

export const View = (props: IStateProps) => {
    const { value, onRadioChange, type, withTax, tax } = props; //type, withTax, 
    console.log('type', type) ;

    return(        
      <form>
        <div className="form-group">
            <label>Сумма</label>
            <div className="form-group radio-group">
                {types.map((item, index) => (
                    <div key={index} className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            value={item.id}                        
                            onChange = {onRadioChange}
                            checked={item.id === +type} />
                        <label className="form-check-label">{item.name}</label>
                    </div>
                )) }
                <div className="form-group sum-group">
                    <p> switcher {withTax ? 'on': 'off'} </p>
                    <p> сумма input {value}</p>
                </div>               
            </div>
            <div className="form-group info-group" >
                <p>Плашка с информацией</p>
                <p>на руки</p>
                <p>ндфл {tax}</p>
                <p>в месяц {value}</p>
            </div>
        </div>
      </form>  

    );
};