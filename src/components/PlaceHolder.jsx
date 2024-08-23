import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Placeholder = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Adjust the size as needed
    minHeight: '100%',
    backgroundColor: '#f0f0f0', // Light grey background
    borderRadius: '15px', // Rounded edges
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
    color: '#333', // Dark text color
    fontSize: '24px', // Larger font size
    fontWeight: 'bold', // Bold text
    textAlign: 'center',
    padding: '20px',
    boxSizing: 'border-box'
  };

  return (
    <div style={containerStyle}>
      <p>Enter your schedule to get started</p>
      <ArrowDownwardIcon fontSize='large'/>
    </div>
  );
};

export default Placeholder;
