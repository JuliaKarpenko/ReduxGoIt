import shortid from 'shortid';
import { types } from './noteActionTypes';

const addNote = text => ({
    type: types.ADD,
    payload: { id: shortid.generate(), text, complited: false}
});

const deleteNote = id => ({
    type: types.DELETE,
    payload: id
});

const toggleNote = id => ({
    type: types.TOGGLE_COMPLETE,
    payload: id
});

const changeFilter = filter => ({
    type: types.CHANGE_FILTER,
    payload: filter
});

export { addNote, deleteNote, toggleNote, changeFilter };