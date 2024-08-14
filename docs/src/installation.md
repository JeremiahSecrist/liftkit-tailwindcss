# Installation
Tailwind makes it super easy to install a plugin using npm, yarn, etc...

## Tailwindcss
For a full Installation of tailwind please see their [docs](https://tailwindcss.com/docs/installation)

# Liftkit plugin

```shell
npm i -D Liftkit-tailwindcss
```

# Basic configuration
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  plugins: [
    require('liftkit-tailwindcss')({
        usePrefix: true
    }),
  ]
}
```
