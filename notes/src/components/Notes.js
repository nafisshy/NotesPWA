import React from 'react';

function Notes({data}){
    return data.map((value)=><p><span style={{fontSize: '40px;'}}>{'\u23f0'} </span>{value}</p>);
}

export default Notes;