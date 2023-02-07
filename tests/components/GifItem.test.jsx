import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

const title = 'Marvel';
const url = 'https://google.com/';

describe('GifItem tests', () => {
  test('Component snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test('Image rendered with URL and ALT attributtes', () => {
    render(<GifItem title={title} url={url} />);

    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('Title being shown in component', () => {
    render(<GifItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
