const postcss = require('postcss');
import { test, expect } from 'vitest';
import tailwindcss from 'tailwindcss';
import cssnanoPlugin from 'cssnano';
import liftkittailwindcss from '../src';

const TAILWIND_BASE = '@tailwind utilities;'

const generatePluginCSS = async (options = {}) => {
  const { inline = '', content = '' } = options

  return postcss([
    cssnanoPlugin(),
    tailwindcss({ plugins: [liftkittailwindcss], content: [{ raw: content }] })
  ])
    .process(`${TAILWIND_BASE} ${inline}`, { from: undefined })
    .then((result) => result.css)
}


test('text-*', async () => {
  const css = await generatePluginCSS({
    content: '<div class="text-display-1">Kaixo</div>'
  })
  expect(css).toMatchFileSnapshot('./snapshots/text-display-1.css');
})

