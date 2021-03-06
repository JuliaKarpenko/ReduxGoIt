import React from 'react';

const NoteFilter = ({value='', onChange=()=> null}) => (
    <input 
        value={value}
        onChange={e => onChange(e.target.value)}
        type='text'
        placeholder='Search...'
    />
)

export default NodeFilter;