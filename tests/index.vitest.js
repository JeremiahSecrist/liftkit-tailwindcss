const postcss = require("postcss");
import { test, expect, describe, it } from "vitest";
import tailwindcss from "tailwindcss";
import cssnanoPlugin from "cssnano";
import liftkittailwindcss from "../src";

function generatePluginCSS({ content }) {
  return postcss([
    cssnanoPlugin(),
    tailwindcss({ plugins: [liftkittailwindcss], content: [{ raw: content }] }),
  ])
    .process("@tailwind utilities; @tailwind components;", { from: undefined })
    .then((result) => result.css);
}

// Object of objects containing test cases
const testCases = {
  fontsize: {
    content:
      "text-display-1 text-display-2 text-title-3 text-heading text-heading-sub text-body text-callout text-label text-caption text-overline",
  },
  shadows: {
    content: "shadow-sm shadow-md shadow-lg shadow-xl shadow-2xl",
  },
  sectionPadding: {
    content: "section-least",
  },
  padding: {
    content:
      "p-lk-2xs p-sm p-lk-xs p-lk-sm p-lk-md p-lk-lg p-lk-xl p-lk-2xl p-mid",
  },
  color: {
    content:
      "bg-lk-primary-light bg-lk-secondary-light bg-lk-secondary-dark",
  },
};

// Function to run tests for each attribute in the object of objects
function mapAndTest(attrSet) {
  Object.entries(attrSet).forEach(([name, { content }]) => {
    describe(`Tailwind CSS Plugin Test: ${name}`, () => {
      it(`should generate the correct CSS for ${name}`, async () => {
        const css = await generatePluginCSS({ content });
        expect(css).toMatchFileSnapshot(`./snapshots/${name}.css`);
      });
    });
  });
}

// Run the tests
mapAndTest(testCases);
