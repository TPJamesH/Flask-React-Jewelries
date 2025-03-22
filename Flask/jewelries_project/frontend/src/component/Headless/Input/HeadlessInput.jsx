import { useEffect, useState } from 'react';

//children is the <input> element
/*State and behavior management */
function HeadlessInput({ children, ...props }) {
    const [value] = useState(props.value || '');

    const handleChange = (e) => {
       props.setVal(e.target.value)
    };
   //  console.log(props.name + ": " + value)

    
    return children({
        value, //passed in extra attribute
        onChange: handleChange, //passed in extra attribute
        ...props // type, name, placeholder, disabled, required
    });
}

export { HeadlessInput }