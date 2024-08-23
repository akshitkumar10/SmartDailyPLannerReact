import React, { useState } from 'react';

// TextArea component
const TextInput = ({ onChange }) => {
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
      placeholder='Enter your day here .....'
      rows="4" // Specify rows to control initial height
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
    width: '100%', // Adjust width as needed
    resize: 'none',
    boxSizing: 'border-box', // Ensure padding and border are included in the width/height
  }
};

export default TextInput;
