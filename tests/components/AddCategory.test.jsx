import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('AddCategory tests', () => {
  test('Text input must be changed', () => {
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'Green Lantern' } });

    expect(input.value).toBe('Green Lantern');
  });

  test('Call onNewCategory if form has value', () => {
    const inputValue = 'groot';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('Do not call onNewCategory if form is empty', () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.submit(form);

    expect(input.value).toBe('');

    expect(onNewCategory).not.toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(0);
  });   
});
