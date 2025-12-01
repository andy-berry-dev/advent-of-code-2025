import { describe, it, expect } from 'vitest';
import { greet } from './example';

describe('greet', () => {
  it('returns a greeting for the given name', () => {
    expect(greet('World')).toBe('Hello, World!');
    expect(greet('Alice')).toBe('Hello, Alice!');
  });
});
