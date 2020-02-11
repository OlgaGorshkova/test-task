import { combineReducers } from 'redux';
import { reducer as formReducer, FormStateMap } from 'redux-form';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';


export interface StorageState {
    form: FormStateMap;
    router: RouterState;
}

export const createRootReducer = (history: History) => combineReducers<StorageState>({
    form: formReducer,
    router: connectRouter(history),
});