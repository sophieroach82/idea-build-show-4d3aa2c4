import { describe, expect, test } from 'bun:test';
import { products, processPages } from './products';
import { experiences, education } from './resume';

describe('Portfolio update', () => {
  test('features Halo and retains only the step stool alongside it', () => {
    expect(products.map(product => product.id)).toEqual(['halo', 'tailor-d']);
    expect(processPages('halo')).toHaveLength(8);
    expect(products[0]?.chapters.flatMap(chapter => chapter.pages).sort((a, b) => a - b)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
  test('uses the current presidency and completed DEI term', () => {
    expect(experiences.find(role => role.title === 'President')?.period).toBe('October 2026 – Present');
    expect(experiences.find(role => role.title.includes('Vice President'))?.period).toBe('October 2025 – October 2026');
  });
  test('retains the completed product development internship', () => {
    expect(experiences.find(role => role.organization === 'Brasseler USA')?.period).toBe('May 2026 – July 2026');
    expect(education.minor).toBe('History');
  });
});