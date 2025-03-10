import { HeadlessInput } from "./HeadlessInput";
/*Rendering */
/*
When the InputGroup component is rendered, 
it receives various props (e.g., label, name, type, value, etc.) 
from its parent component
*/
function InputGroup({
  label,
  name,
  value,
  type,
  disabled,
  placeholder,
  required,
  classNameInput,
  classNameLabel,
}) {
  //pass down from InputGroup to HeadlessInput
  return (
    <HeadlessInput
      name={name}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      value={value}
    >
      {/* 
      The children function is not an internal part of HeadlessInput;
       instead, it's an external function provided by the parent component (InputGroup) and executed by HeadlessInput
      */}
      {({ value, onChange, type, name, placeholder, disabled, required }) => (
        //START OF CHILDREN FUNCTION (receives the props and state passed down by headless input)
        <div className="relative z-0 w-full">
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className={classNameInput ? classNameInput : `peer block py-2.5 px-1 w-full text-sm text-gray-600 bg-transparent border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-[#FF6464] placeholder-transparent focus:placeholder-gray-600 ${disabled ? "border-gray-300" : "border-gray-400"
              }`}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
          />
          <label
            htmlFor={name}
            className={classNameLabel ? classNameLabel : "peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"}
          >
            {label}
          </label>
        </div>
         //END OF CHILDREN FUNCTION
      )}
    </HeadlessInput>
  );
}



export { InputGroup };
