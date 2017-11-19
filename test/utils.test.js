import {extractCamelCase} from '../src/utils';

it('extractCamelCase', () => {
  expect(extractCamelCase('topTop')).toEqual(['Top', 'Top']);
})