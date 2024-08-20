import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders booking form', () => {
  render(<BookingForm />);
  const nameInput = screen.getByLabelText(/name/i);
  expect(nameInput).toBeInTheDocument();
});

test('submits form data', () => {
  render(<BookingForm />);
  const nameInput = screen.getByLabelText(/name/i);
  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.click(screen.getByText(/book table/i));
  // Add more assertions as needed
});
