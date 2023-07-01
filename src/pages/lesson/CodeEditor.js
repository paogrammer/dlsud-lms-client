import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const AceEditor = dynamic(() => import('react-ace'), {
  ssr: false, // This ensures the component is not rendered on the server
});

const CodeEditorComponent = () => {
  const [code, setCode] = useState('');
  const [isCodeSuccessful, setIsCodeSuccessful] = useState(false);
  const [hasCodeRun, setHasCodeRun] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState('');

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleRunClick = () => {
    const testResult = executeCode(code);
    setIsCodeSuccessful(testResult.success);
    setConsoleOutput(testResult.consoleOutput);
    setHasCodeRun(true);
  };

  const executeCode = (code) => {
    const comments = [];
    const consoleOutput = [];
    const originalConsoleLog = console.log;

    console.log = (message) => {
      if (typeof message === 'string' && message.startsWith('//')) {
        comments.push(message); // Capture comments
      } else {
        consoleOutput.push(message); // Capture console output
      }
    };

    try {
      eval(code);

      let name = false;
      let age = false;
      let isEmployee = false;

      const codeLines = code.split('\n');
      for (let i = 0; i < codeLines.length; i++) {
        const line = codeLines[i].trim();

        if (line.startsWith('let ') && line.includes('name')) {
          name = true;
        }

        if (line.startsWith('let ') && line.includes('age')) {
          age = true;
        }

        if (line.startsWith('let ') && line.includes('isEmployee')) {
          isEmployee = true;
        }
      }

      if (!name || !age || !isEmployee) {
        return {
          success: false,
          comments: ['Variable declaration incorrect.'],
          consoleOutput: [],
        };
      }

      // Additional checks or logic specific to this exercise can be added here

      return {
        success: true,
        comments,
        consoleOutput: consoleOutput.join('\n'),
      };
    } catch (error) {
      console.error('Error during code execution:', error);
      return {
        success: false,
        comments: ['Error occurred during code execution.'],
        consoleOutput: [],
      };
    } finally {
      console.log = originalConsoleLog;
    }
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
          data-testid="code-editor"
        />
      )}

      <button className="btn btn-primary" onClick={handleRunClick}>
        Run
      </button>

      {hasCodeRun && (
        <div style={{ marginTop: '50px' }}>
          <p>Console Output:</p>
          <pre>{consoleOutput}</pre>
          {isCodeSuccessful ? <p>Code successful!</p> : <p>Code unsuccessful!</p>}
        </div>
      )}
    </div>
  );
};

export default CodeEditorComponent;
