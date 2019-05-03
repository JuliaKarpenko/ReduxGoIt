import { combineReducers } from 'redux';
import notesReduser from './notes/notesReduser';

export default combineReducers ({
    notes: notesReduser,
});