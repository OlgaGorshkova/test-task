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
    const { onRadioChange, onInputChange, onSwitcherChange, salary, sumInput} = props;     

    return(        
      <form>
        <div className="form-group calculator">
            <label className="label-grey">Сумма</label>
            <div className="form-group radio-group bold">
                {types.map((item, index) => (
                    <div key={index} className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            value={item.id}                        
                            onChange = {onRadioChange}
                            checked={item.id === salary.type} />
                        <label className="form-check-label">{item.name}</label>
                    </div>
                )) }                                  
               
                <div className="form-check-inline sum-group">
                    <label className="label-grey"> Указать с НДФЛ </label>
                    <label className="switch">
                        <input
                            type="checkbox"
                            value={salary.withTax} 
                            checked={salary.withTax === 0}
                            onChange = {onSwitcherChange}/>
                        <span className="slider round"></span>
                    </label>
                    <label className="label-grey"> Без НДФЛ </label>                   
                </div>
                            
                <div className="form-group-inline sum-group">  
                    <input
                        className="form-contol custom-input number"
                        type="text"
                        placeholder="Введите сумму"
                        value={sumInput.toLocaleString('ru-RU')}                        
                        onChange={onInputChange}
                    />                   
                    <span> &#8381;</span>
                </div>               
            </div>
            { 
                (salary.type === 1) &&
                <div className="form-group info-group" >
                    <p>
                        <span className="bold">
                            {salary.sum && salary.sum.toLocaleString('ru-RU', {style:'currency', currency: 'RUB'}).replace(',00', '')}
                        </span> на руки
                    </p>
                    <p>
                        <span className="bold">
                            {salary.tax && salary.tax.toLocaleString('ru-RU', {style:'currency', currency: 'RUB'}).replace(',00', '')}
                        </span> НДФЛ, 13% от оклада
                    </p>
                    <p>
                        <span className="bold">
                            {salary.sumWithTax && salary.sumWithTax.toLocaleString('ru-RU', {style:'currency', currency: 'RUB'}).replace(',00', '')}
                        </span> за сотрудника в месяц
                    </p>                    
                </div>
            }
        </div>
      </form>  

    );
};