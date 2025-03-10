import {useState} from 'react'

function HeadlessComboBox({ children, ...props }) {
    const firstItem = props.data[0]
    const fieldValue = firstItem[props.textField]
    const [value, setValue] = useState(fieldValue || '')

    function handleChange(value) { setValue(value) }

    function handleSelect(value) {
        localStorage.setItem(value[props.dataKey], JSON.stringify(value))
        props.handleFunction(value[props.dataKey])
    }

    return children({
        value,
        onChange: handleChange,
        onSelect: handleSelect,
        ...props
    })

}

export {HeadlessComboBox}