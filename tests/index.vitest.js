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
  padding: "p-lk-2xs p-lk-xs p-lk-sm p-lk-md p-lk-lg p-lk-xl p-lk-2xl",
  margin: "m-lk-2xs m-lk-xs m-lk-sm m-lk-md m-lk-lg m-lk-xl m-lk-2xl",
  color: "bg-lk-primary-light bg-lk-secondary-light bg-lk-secondary-dark",
  aspectRatio: "aspect-16-9 aspect-4-3 aspect-3-2 aspect-9-16 aspect-1-1",
  containers: "containers-least containers-less containers containers-more containers-most"
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
