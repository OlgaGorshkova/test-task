import * as React from 'react';
import { IStateProps, DictionaryItem } from './model';

import './style.scss';

export const types: DictionaryItem[] = [
    {id: 1, name: 'Оклад за месяц'},
    {id: 2, name: 'МРОТ'},
    {id: 3, name: 'Оплата за день'},
    {id: 4, name: 'Оплата за час'},
];

export const View = (props: IStateProps) => {
    const { onRadioChange, onInputChange, onSwitcherChange, onInfoClick, salary, sumInput, fixInfo } = props;

    return(
      <form>
        <div className='form-group calculator'>
            <label className='calc-label secondary'>Сумма</label>
            <div className='form-group ml-3 bold'>
                {types.map((item, index) => (
                    <div key={index} className='custom-control custom-radio'>
                        <input
                            id={'radio' + index}
                            className='custom-control-input'
                            type='radio'
                            value={item.id}
                            onChange = {onRadioChange}
                            checked={item.id === salary.type} />
                        <label className='custom-control-label' htmlFor={'radio' + index}>{item.name} </label>
                        {
                            (item.id === 2) &&
                            <div className='d-inline-block'>
                                <div className='info-icon tooltip' onClick={onInfoClick}>
                                    {fixInfo ? 'X' : 'i' }
                                </div>
                                <div className={`tooltiptext ${fixInfo ? 'info-fixed' : ''}`} >
                                    МРОТ - минимальный размер оплаты труда. Разный для разных регионов.
                                </div>
                            </div>
                        }
                    </div>
                )) }
                <div className='form-check-inline ml-3'>
                    <label className={`calc-label ${salary.withTax ? 'primary' : 'secondary'}`}> Указать с НДФЛ </label>
                    <label className='switch'>
                        <input
                            type='checkbox'
                            value={salary.withTax}
                            checked={salary.withTax === 0}
                            onChange = {onSwitcherChange}/>
                        <span className='slider round'></span>
                    </label>
                    <label className={`calc-label ${salary.withTax ? 'secondary' : 'primary'}`}> Без НДФЛ </label>
                </div>
                <div className='form-group-inline ml-3'>
                    <input
                        className='form-contol custom-input number'
                        type='text'
                        placeholder='Введите сумму'
                        value={sumInput.toLocaleString('ru-RU')}
                        onChange={onInputChange}
                    />
                    <span> &#8381;</span>
                    {
                        (salary.type === 3) &&
                        <span> в день</span>
                    }
                    {
                        (salary.type === 4) &&
                        <span> в час</span>
                    }
                </div>
            </div>
            {
                (salary.type === 1) &&
                <div className='form-group info-group'>
                    <p>
                        <span className='bold'>
                            {salary.sum && salary.sum.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'}).replace(',00', '')}
                        </span> на руки
                    </p>
                    <p>
                        <span className='bold'>
                            {salary.tax && salary.tax.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'}).replace(',00', '')}
                        </span> НДФЛ, 13% от оклада
                    </p>
                    <p>
                        <span className='bold'>
                            {salary.sumWithTax
                                && salary.sumWithTax.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'}).replace(',00', '')}
                        </span> за сотрудника в месяц
                    </p>
                </div>
            }
        </div>
      </form>
    );
};
