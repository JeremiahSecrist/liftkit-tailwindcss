# __UNDER CONSTRUCTION__
This project is currently in very early stages.
Please understand that many things are subject to change without notice untill stable is announced.

# Installation
Tailwind makes it super easy to install a plugin using npm, yarn, etc...

## Tailwindcss
For a full Installation of tailwind please see their [docs](https://tailwindcss.com/docs/installation)

# Liftkit plugin

```shell
npm i -D liftkit-tailwindcss
```

## Basic configuration
To add the plugin simply copy the require portion below.

```js
/** tailwind.config.js **/
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
