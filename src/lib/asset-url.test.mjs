import { describe, expect, test } from 'bun:test';
import { assetUrl } from './asset-url';

describe('Portfolio image hosting', () => {
  const haloPath = '/__l5e/assets-v1/445c353c-5282-43d6-95e6-12dd8543affc/halo-cover.jpg';
  const hostedHalo = `https://idea-build-show.lovable.app${haloPath}`;

  test('serves relative image pointers from Lovable rather than the personal domain', () => {
    expect(assetUrl(haloPath)).toBe(hostedHalo);
  });

  test('repairs absolute pointers saved against external hosting', () => {
    expect(assetUrl(`https://sophieroach.me${haloPath}`)).toBe(hostedHalo);
  });

  test('retains already hosted images and their query parameters', () => {
    expect(assetUrl(`${hostedHalo}?v=1#page`)).toBe(`${hostedHalo}?v=1#page`);
  });

  test('leaves bundled image paths unchanged', () => {
    expect(assetUrl('/assets/hero-stool.png')).toBe('/assets/hero-stool.png');
  });
});