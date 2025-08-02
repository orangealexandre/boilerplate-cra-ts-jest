import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders React + Express + TypeScript title', () => {
  render(<App />);
  const titleElement = screen.getByText(/React \+ Express \+ TypeScript/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders Add New User form', () => {
  render(<App />);
  const formTitle = screen.getByText(/Add New User/i);
  expect(formTitle).toBeInTheDocument();
});

test('renders Users list', () => {
  render(<App />);
  const usersTitle = screen.getByText(/Users/i);
  expect(usersTitle).toBeInTheDocument();
});
