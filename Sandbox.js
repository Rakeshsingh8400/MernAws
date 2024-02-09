import React, { useState } from 'react';
import sandboxService from '../services/sandboxService';

const Sandbox = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('javascript');

  const handleRunCode = async () => {
    try {
      const response = await sandboxService.runCode({ code, language });
      setOutput(response.output);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveSandbox = async () => {
    try {
      const response = await sandboxService.saveSandbox({ code, output, language });
      // Handle successful save (update state, show notification, etc.)
    } catch (error) {
      // Handle save error
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Sandbox</h1>
      <select onChange={(e) => setLanguage(e.target.value)}>
        <option value="javascript">JavaScript</option>
        {/* Add options for other languages here */}
      </select>
      <div>
        <textarea value={code} onChange={(e) => setCode(e.target.value)} />
      </div>
      <div>
        <button onClick={handleRunCode}>Run Code</button>
      </div>
      <div>
        <h2>Output:</h2>
        <pre>{output}</pre>
      </div>
      <div>
        <button onClick={handleSaveSandbox}>Save Sandbox</button>
      </div>
    </div>
  );
};

export default Sandbox;
