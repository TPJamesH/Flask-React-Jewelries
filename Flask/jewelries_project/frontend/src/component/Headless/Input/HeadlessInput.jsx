import { useEffect, useState } from 'react';

//children is the <input> element
/*State and behavior management */
function HeadlessInput({ children, ...props }) {
    const [value, setValue] = useState(props.value || '');

    const handleChange = (e) => {
        if (typeof props.setVal === 'function') {
            props.setVal(e.target.value)
        }
        //fallback
        else {
            setValue(e.target.value)
        }
    };
    //  console.log(props.name + ": " + value)


    return children({
        value, //passed in extra attribute
        onChange: handleChange, //passed in extra attribute
        ...props // type, name, placeholder, disabled, required
    });
}

export { HeadlessInput }