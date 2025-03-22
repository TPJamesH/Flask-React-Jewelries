// HeadlessDropDown.jsx
import React, { useState } from 'react';

const HeadlessDropDown = ({ children,...props}) => {
  const [selectedValue, setSelectedValue] = useState(props.options[0]);

  function handleChange(e) {
    setSelectedValue(e.target.value);
    props.handleFunction(e.target.value)
  }

  return children({
    selectedValue,
    handleChange,
    ...props
  });
}

export { HeadlessDropDown };


/*// DropDownComponent.jsx
import React from 'react';
import { HeadlessDropDown } from './HeadlessDropDown';

const DropDownComponent = () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
  ];

  return (
    <HeadlessDropDown options={options}>
      {({ selectedValue, handleChange, options }) => (
        <select value={selectedValue} onChange={handleChange}>
          {options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      )}
    </HeadlessDropDown>
  );
};

export default DropDownComponent;
*/