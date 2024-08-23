import React, { useState } from 'react';

// TextArea component
const ApiInput = ({ onChange }) => {
  // State to manage the textarea value
  const [value, setValue] = useState('');

  // Handle change event
  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <textarea
      value={value}
      onChange={handleChange}
      style={styles.textarea}
      placeholder='Enter your API key here .....'
      rows="1" // Specify rows to control initial height
    />
  );
};

// Simple styling
const styles = {
  textarea: {
    borderRadius: '8px',
    border: '1px solid #ccc',
    padding: '8px',
    fontSize: '16px',
    outline: 'none',
    width: '20%', // Adjust width as needed
    resize: 'none',
    boxSizing: 'border-box', // Ensure padding and border are included in the width/height
  }
};

export default ApiInput;
