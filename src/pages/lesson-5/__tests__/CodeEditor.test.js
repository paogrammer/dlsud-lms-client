import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CodeEditorComponent from '../CodeEditor';


describe('CodeEditorComponent', () => {
  it('should render the code editor', () => {
    render(<CodeEditorComponent />);

    const editorElement = screen.getByTestId('code-editor');
    expect(editorElement).toBeInTheDocument();
  });

  it('should execute the code and display success message', () => {
    render(<CodeEditorComponent />);

    const runButton = screen.getByText('Run');
    fireEvent.click(runButton);

    const successMessage = screen.getByText('Code successful!');
    expect(successMessage).toBeInTheDocument();
  });

  it('should execute the code and display error message', () => {
    render(<CodeEditorComponent />);

    // Modify the code to introduce an error
    const codeEditor = screen.getByTestId('code-editor');
    fireEvent.change(codeEditor, { target: { value: 'const c = a - b;' } });

    const runButton = screen.getByText('Run');
    fireEvent.click(runButton);

    const errorMessage = screen.getByText('Code unsuccessful!');
    expect(errorMessage).toBeInTheDocument();
  });
});
