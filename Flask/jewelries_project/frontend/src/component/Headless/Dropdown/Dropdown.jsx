import { HeadlessDropDown } from "./HeadlessDropdown"
export default function Dropdown({
    name,
    options,
    container,
    text,
    handleFunction
}) {
    return (
        <HeadlessDropDown 
        options={options}
        handleFunction={handleFunction}
        >
            {({ selectedValue, handleChange, options }) => (
                <select name={name} value={selectedValue} onChange={handleChange} className={container}>
                    {options.map(option => (
                        <option key={option.value} value={option.value} className={text}>
                            {option.label}
                        </option>
                    ))}
                </select>
            )}
        </HeadlessDropDown>
    )
}