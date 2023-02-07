import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('GifGrid tests', () => {
  const category = 'Aquaman';

  test('Show loading initially', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText('Loading...'));
    expect(screen.getByText(category));
  });

  test('Show items when images load using useFetchGifs', () => {
    const gifs = [
      {
        id: '1',
        title: 'Flash',
        url: 'https://google.com/Flash',
      },
      {
        id: '2',
        title: 'Wonder Woman',
        url: 'https://google.com/WW',
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
