import { HeadlessDropDown } from "./HeadlessDropdown"
function Dropdown({
    options
}) {
    return (
        <HeadlessDropDown options={options}>
            {({ selectedValue, handleChange, options }) => (
                <select value={selectedValue} onChange={handleChange}>
                    {options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            )}
        </HeadlessDropDown>
    )
}