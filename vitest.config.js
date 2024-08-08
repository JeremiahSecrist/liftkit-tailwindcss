/// <reference types="vitest" />
import { defineConfig, mergeConfig } from "vitest/config";

export default mergeConfig(
  defineConfig({
    test: {
      exclude: ["packages/template/*"],
      include: ["./tests/*.vitest.js"],
    },
  }),
);
