import React from 'react';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App';
import Dashboard from './components/Dashboard'
import Display from './components/Display'



test('renders without crashing', () => {
  const wrapper = rtl.render(<App/>)
  expect(wrapper).toBeVisible
});


test('renders dashboard component', () => {
  const wrapper = rtl.render(<Dashboard/>)
  const element = wrapper.getByText(/hit/i)
  expect(element).toBeInTheDocument()
}) 



// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
