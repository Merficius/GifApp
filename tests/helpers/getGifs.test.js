import { getGifs } from '../../src/helpers/getGifs';

describe('getGifs tests', () => {
  test('Return a gif array', async () => {
    const gifs = await getGifs('Green Lantern');

    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
