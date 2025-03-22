// HeadlessForm.jsx
import React, { useState } from 'react';

function HeadlessForm({ onSubmit, children }) {
  const [formState, setFormState] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formState);
    }
  }

  return children({
    formState,
    handleChange,
    handleSubmit
  });
}

export { HeadlessForm };

/*// FormComponent.jsx
import React from 'react';
import { HeadlessForm } from './HeadlessForm';
import { InputGroup } from './InputGroup';
import { Button } from './Button';

const FormComponent = () => {
  const handleFormSubmit = (formState) => {
    console.log('Form submitted with state:', formState);
  };

  return (
    <HeadlessForm onSubmit={handleFormSubmit}>
      {({ formState, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <InputGroup
            label="Name"
            name="name"
            type="text"
            value={formState.name || ""}
            onChange={handleChange}
          />
          <Button type="submit">Submit</Button>
        </form>
      )}
    </HeadlessForm>
  );
};

export default FormComponent;
 */