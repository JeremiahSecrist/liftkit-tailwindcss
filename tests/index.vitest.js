const postcss = require('postcss');
import { test, expect } from 'vitest';
import tailwindcss from 'tailwindcss';
import liftkittailwindcss from '../src';
let expectedV3 = `
`

test('v3', async () => {
  const result = await postcss([
    tailwindcss({
      content: [
        {
          raw: '',
        },
      ],
      plugins: [liftkittailwindcss],
    }),
  ]).process('@tailwind components')

  expect(result.css.trim()).toBe(expectedV3.trim())
})

