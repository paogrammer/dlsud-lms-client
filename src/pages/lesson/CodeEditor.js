import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const AceEditor = dynamic(() => import('react-ace'), {
  ssr: false, // This ensures the component is not rendered on the server
});

const CodeEditorComponent = () => {
  const [code, setCode] = useState('');
  const [testResult, setTestResult] = useState(null);
  const [hasCodeRun, setHasCodeRun] = useState(false);

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleRunClick = () => {
    // Execute the code and capture the test result
    const result = executeCode(code);
    setTestResult(result);
    setHasCodeRun(true);
  };

  const executeCode = (code) => {
    // Capture the console output and comments
    const consoleOutput = [];
    const comments = [];
    const originalConsoleLog = console.log;

    // Replace console.log to capture the output and comments
    console.log = (message) => {
      if (typeof message === 'string' && message.startsWith('//')) {
        comments.push(message); // Capture comments
      } else {
        consoleOutput.push(message); // Capture console output
      }
    };

    try {
      // Evaluate the code in a sandboxed environment
      eval(code);
    } catch (error) {
      console.error('Error during code execution:', error);
      return {
        success: false,
        comments: [],
        consoleOutput: [],
      };
    } finally {
      // Restore the original console.log function
      console.log = originalConsoleLog;
    }

    return {
      success: code.includes('Hello World!'),
      comments,
      consoleOutput,
    };
  };

  return (
    <div>
      {typeof window !== 'undefined' && (
        <AceEditor
          mode="javascript"
          theme="monokai"
          value={code}
          onChange={handleCodeChange}
          name="code-editor"
          editorProps={{ $blockScrolling: Infinity }}
          height="500px"
          width="100%"
        />
      )}

      <button className="btn btn-primary" style={{ float: 'left', padding: '10px' }} onClick={handleRunClick}>
        Run
      </button>

      {hasCodeRun && testResult && (
        <div style={{ marginTop: '50px' }}>
          <p>Test Result: {testResult.success ? 'Code successful!' : 'Code unsuccessful!'}</p>
          <p>Comments:</p>
          <ul>
            {testResult.comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
          <p>Console Output:</p>
          <ul>
            {testResult.consoleOutput.map((output, index) => (
              <li key={index}>{output}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CodeEditorComponent;
