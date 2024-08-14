const postcss = require("postcss");
import { test, expect } from "vitest";
import tailwindcss from "tailwindcss";
import cssnanoPlugin from "cssnano";
import liftkittailwindcss from "../src";

const generatePluginCSS = async (options = {}) => {
  const { content = "" } = options;

  return postcss([
    cssnanoPlugin(),
    tailwindcss({ plugins: [liftkittailwindcss], content: [{ raw: content }] }),
  ])
    .process("@tailwind utilities; @tailwind components;", { from: undefined })
    .then((result) => result.css);
};

test("fontsize", async () => {
  const css = await generatePluginCSS({
    content:
      "text-display-1 text-display-2 text-title-3 text-heading text-heading-sub text-body text-callout text-label text-caption text-overline",
  });
  expect(css).toMatchFileSnapshot("./snapshots/fontsize.css");
});
test("shadows", async () => {
  const css = await generatePluginCSS({
    content:
      "shadow-sm shadow-md shadow-lg shadow-xl shadow-2xl"
  });
  expect(css).toMatchFileSnapshot("./snapshots/shadows.css");
});

test("section padding", async () => {
  const css = await generatePluginCSS({
    content:
      "section-least"
  });
  expect(css).toMatchFileSnapshot("./snapshots/section.css");
});

test("padding", async () => {
  const css = await generatePluginCSS({
    content:
      "p-lk-2xs p-sm p-lk-xs p-lk-sm p-lk-md p-lk-lg p-lk-xl p-lk-2xl p-mid"
  });
  expect(css).toMatchFileSnapshot("./snapshots/spacing.css");
});

test("color", async () => {
  const css = await generatePluginCSS({
    content:
      "bg-lk-on-primary-light bg-lk-on-secondary-dark"
  });
  expect(css).toMatchFileSnapshot("./snapshots/colors.css");
});
