import React from 'react';
const SelectDID = (props) => {
return (
    <option placeholder="district names">{props.dname}-{props.id}</option>
);
}


export default SelectDID;