import { useFetchGifs } from '../../src/hooks/useFetchGifs';
import { renderHook, waitFor } from '@testing-library/react';

describe('useFetchGifs tests', () => {
  test('Return initial state', () => {
    const { result } = renderHook(() => useFetchGifs('Iron Man'));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('Return an array of images and isLoading in false', async () => {
    const { result } = renderHook(() => useFetchGifs('Iron Man'));

    await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0), {
      timeout: 6000,
    });

    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
