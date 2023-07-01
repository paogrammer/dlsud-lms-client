import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const AceEditor = dynamic(() => import('react-ace'), {
  ssr: false, // This ensures the component is not rendered on the server
});

const fruitsValidator = (code) => {
  try {
    const regex = /const\s+fruits\s*=\s*\[.*?\];/s;
    const isFruitsDeclared = regex.test(code);

    if (isFruitsDeclared) {
      return {
        success: true,
        message: 'Array "fruits" is declared successfully.',
      };
    } else {
      return {
        success: false,
        message: 'Array "fruits" is not declared or has an incorrect syntax.',
      };
    }
  } catch (error) {
    console.error('Error during code execution:', error);
    return {
      success: false,
      message: 'Error occurred during code execution.',
    };
  }
};





const CodeEditorComponent = () => {
  const [code, setCode] = useState('');
  const [isCodeSuccessful, setIsCodeSuccessful] = useState(false);
  const [hasCodeRun, setHasCodeRun] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState('');

  const handleCodeChange = (newCode) => {
    setCode(newCode);
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

      const validation = fruitsValidator(code);
      if (!validation.success) {
        return {
          success: false,
          comments: [validation.message],
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

  const handleRunClick = () => {
    const testResult = executeCode(code);
    setIsCodeSuccessful(testResult.success);
    setConsoleOutput(testResult.consoleOutput);
    setHasCodeRun(true);
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
