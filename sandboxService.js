// This is a placeholder, you need to implement the actual API calls
const runCode = async (data) => {
    // Implement your API call to run code
    const response = await fetch('/sandbox/run', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming you store the token in localStorage
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };
  
  const saveSandbox = async (data) => {
    // Implement your API call to save the sandbox
    const response = await fetch('/sandbox/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming you store the token in localStorage
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };
  
  export default { runCode, saveSandbox };
  