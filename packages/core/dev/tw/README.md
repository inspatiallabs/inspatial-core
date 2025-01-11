<div align="center">
  <!-- <img src="https://your-image-url.com/inspatial-logo.png" alt="InSpatial Core Logo" width="200"/> -->

# 🛠️ InSpatial Tailwind CSS Config

_🎨 Use InSpatial design system in tailwind as a simple preset_

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Dev](https://img.shields.io/badge/dev-inspatial.dev-brightgreen.svg)](https://www.inspatial.dev)
[![App](https://img.shields.io/badge/app-inspatial.app-purple.svg)](https://www.inspatial.app)
[![Cloud](https://img.shields.io/badge/cloud-inspatial.cloud-yellow.svg)](https://www.inspatial.cloud)
[![Store](https://img.shields.io/badge/store-inspatial.store-red.svg)](https://www.inspatial.store)

</div>

---

## 🚀 Features

- InSpatial's new default styling primitives and variables
- Seamless integration with InSpatial apps or any Tailwind CSS project
- Optimized for spatial computing and cross-platform development
- Inspired by [default Tailwind configuration](https://github.com/tailwindlabs/tailwindcss/blob/main/stubs/config.full.js)

## 📦 Install InSpatial Tailwind Config

```bash
deno add jsr:@inspatial/tailwind-config tailwindcss
```

---

## 🔧 Usage

Extend your `tailwind.config.ts` file with InSpatial's custom configuration:

```ts
const inSpatialTailwindConfig = require("@inspatial/tailwind-config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [inSpatialTailwindConfig],
  // Optional: Add project specific configurations e.g
  // content: [],
  // theme: {
  //   extend: {},
  // },
  // ... more configurations
};
```

## 📚 Documentation

## Good to know

Adding the following configuration values will override InSpatial's Tailwind Config default ones.

#### - `content`

By default InSpatial takes a primitive guess at what you might want to include in your content array, however it is recommended that you override this by providing your own content array based on prroject structure and framework. Here's an example of what this might look like if you are using Next.js or similar framework:

```js
content: [
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
```

**NOTE:** Do not overide if you are using InSpatial Run, as it will be populated with the correct paths for your project.

---

Other configuration values are optional, however if you do provide them they will not override InSpatial's defaults but will extend them e.g

#### - `separator`

#### - `blocklist`

#### - `corePlugins`

#### - `safelist`

#### - `prefix`

etc...

#### - `theme`

Theme is multi-faceted because you can override as well as extend InSpatial's defaults.


**Recommended:** Put your theme configurations inside the extend attribute it will add your configurations to InSpatial's defaults without overidding them which is what we you want to do in most cases.

```js
theme: {
  extend: {
    // Your configurations here
  }
}
```

**Overriding (Not Recommended):** You can overide InSpatial's defaults by passing your values directly inside the theme: {} attribute in your theme config - which will result in InSpatial's defaults being overridden.

```js
theme: {
  // Your configurations here
}
```

**Note**: You probably don't want to override the theme seeing as this particular config is what makes InSpatial apps look the way they do! However if you find yourself doing this, you might want to consider removing the InSpatial Tailwind Config package and only using it as a guide to build your own.

### Dependencies

- InSpatial Tailwind Config is built on top of [Tailwind CSS](https://tailwindcss.com/), so all the Tailwind CSS documentation and guides apply.
- InSpatial Tailwind Config is built with [Tailwind CSS Typography Plugin](https://github.com/tailwindcss/typography), so all the Tailwind CSS Typography documentation and guides apply.
- InSpatial Tailwind Config is built with [Tailwind CSS 3D Transforms Plugin](https://github.com/XPD-Kasun/tailwind-3dtransform-plugin), so all the Tailwind CSS 3D Transforms documentation and guides apply.

---

## 🎭 What's Included?

- A brand new color palette optimized for spatial interfaces
- InSpatial's Typography scales, a collection of 70+ premium Kit fonts, and font weights, line heights and letterspacing presets for seamless readability across devices
- Iconography system with 10000+ icons optimized for spatial interfaces powered by InSpatial Kit Icons and a myriad of third party icon libraries.
- Spacing and sizing utilities tailored for all spatial environments
- Responsive breakpoints for spatial/window-first design
- Custom cursors
- Border and Corner radius utilities optimized for spatial interfaces
- Adaptive effects, shadows and opacity utilities for depth perception.
- Extended Height and Width utilities
- Custom Animation, Keyframes and transition presets for smooth spatial interactions

## 🛠 Customization

While `@inspatial/tailwind-config` provides a solid foundation, you can always extend or override any part of the configuration to suit your project's specific needs.

## 🚀 Getting Started

To begin your journey with InSpatial Core, visit our comprehensive documentation at [inspatial.dev](https://www.inspatial.dev).

---

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) to get started.


---

## 📄 License

InSpatial Core is released under the Apache 2.0 License. See the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <strong>Ready to supercharge your spatial development?</strong>
  <br>
  <a href="https://www.inspatial.dev">Get Started with InSpatial Tailwind Config</a>
</div>
