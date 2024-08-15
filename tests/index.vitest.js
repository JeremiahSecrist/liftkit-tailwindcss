const postcss = require("postcss");
import { test, expect, describe, it } from "vitest";
import tailwindcss from "tailwindcss";
import liftkittailwindcss from "../src";

async function generatePluginCSS(content) {
  return postcss([
    tailwindcss({ plugins: [liftkittailwindcss], content: [{ raw: content }] }),
  ])
    .process("@tailwind utilities; @tailwind components;", { from: undefined })
    .then((result) => result.css);
}

// Object of objects containing test cases
const testCases = {
  fontsize: "text-display-1 text-display-2 text-title-3 text-heading text-heading-sub text-body text-callout text-label text-caption text-overline",
  shadows: "shadow-sm shadow-md shadow-lg shadow-xl shadow-2xl",
  sectionPadding: "section-least",
  padding: "p-lk-2xs p-sm p-lk-xs p-lk-sm p-lk-md p-lk-lg p-lk-xl p-lk-2xl p-mid",
  color: "bg-lk-primary-light bg-lk-secondary-light bg-lk-secondary-dark",
};

// Function to run tests for each attribute in the object of objects
function mapAndTest(attrSet) {
  Object.entries(attrSet).forEach(([name, value]) => {
    test(`Generate Tailwind CSS with ${name} with ${value}`, async () => {
      const css = await generatePluginCSS(value);
      expect(css).toMatchFileSnapshot(`./snapshots/${name}.css`);
    });
  });
}

// Run the tests
mapAndTest(testCases);
