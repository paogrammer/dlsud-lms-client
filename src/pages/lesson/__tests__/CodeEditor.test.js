// // src/pages/lesson/__tests__/CodeEditor.test.js

// import { render, screen, fireEvent } from '@testing-library/react';
// import CodeEditorComponent from '../CodeEditor';
// import React from 'react';

// describe('CodeEditorComponent', () => {
//   test('displays the correct output for "Hello World"', () => {
//     render(<CodeEditorComponent />);

//     // Simulate code input
//     const codeEditorElement = screen.getByLabelText(/code editor/i);
//     fireEvent.change(codeEditorElement, { target: { value: 'console.log("Hello World");' } });

//     // Trigger code execution (e.g., on button click)
//     const runButton = screen.getByText(/run/i);
//     fireEvent.click(runButton);

//     // Validate the output
//     const outputElement = screen.getByTestId('output');
//     expect(outputElement).toHaveTextContent('Hello World');
//   });

//   // Add more tests as needed to cover different aspects of your component
// });
