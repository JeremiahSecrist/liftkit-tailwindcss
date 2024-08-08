const postcss = require('postcss');
import { test, expect } from 'vitest';
import tailwindcss from 'tailwindcss';
import cssnanoPlugin from 'cssnano';
import liftkittailwindcss from '../src';

const generatePluginCSS = async (options = {}) => {
  const { content = '' } = options

  return postcss([
    cssnanoPlugin(),
    tailwindcss({ plugins: [liftkittailwindcss], content: [{ raw: content }] })
  ])
    .process("@tailwind utilities;", { from: undefined })
    .then((result) => result.css)
}

test('fontsize', async () => {
  const css = await generatePluginCSS({
    content: 'text-display-1 text-display-2 text-title-3 text-heading text-heading-sub text-body text-callout text-label text-caption text-overline'
  })
  expect(css).toMatchFileSnapshot('./snapshots/fontsize.css');
})

