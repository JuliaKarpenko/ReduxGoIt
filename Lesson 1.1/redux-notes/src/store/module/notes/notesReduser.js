import {combineReducers} from 'redux';
import types from './noteActionTypes';

function itemReduser(state=[], {type, payload}) {
    switch(type) {
        case types.ADD:
            return [...state, payload];
        case types.DELETE:
            return state.filter(item => item.id !== payload);
        case types.TOGGLE_COMPLETE:
            return state.map(item => item.id == payload ? {...item, complited: !item.complited}: item);
        default: 
            return state;
    }
};

function filterReduser(state='', {type,payload}) {
    switch(type) {
        case  types.CHANGE_FILTER:
            return payload;
        default: 
            return state;
    }
};

export default combineReducers ({
    items: itemReduser,
    filter: filterReduser
})
