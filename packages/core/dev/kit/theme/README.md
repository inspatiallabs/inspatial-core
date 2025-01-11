<div align="center">
    <!-- <a href="https://inspatiallabs.com#gh-dark-mode-only" target="_blank">
    <img src="https://inspatial-storage.s3.eu-west-2.amazonaws.com/media/icon-brutal-light.svg" alt="InSpatial" width="300"/>
   </a> -->

<a href="https://inspatiallabs.com" target="_blank">
    <img src="https://inspatial-storage.s3.eu-west-2.amazonaws.com/media/icon-brutal-dark.svg" alt="InSpatial" width="300"/>
   </a>

<br>
   <br>

<p align="center">
  <!-- <a href="https://inspatiallabs.com#gh-dark-mode-only" target="_blank">
        <img src="https://inspatial-storage.s3.eu-west-2.amazonaws.com/media/logo-light.svg" height="75" alt="InSpatial">
    </a> -->
      <a href="https://inspatiallabs.com" target="_blank">
        <img src="https://inspatial-storage.s3.eu-west-2.amazonaws.com/media/logo-dark.svg" height="75" alt="InSpatial">
    </a>
</p>

_Reality is your canvas_

<h3 align="center">
  InSpatial is a spatial computing platform <br> for building universal and XR (AR/MR/VR) applications
</h3>

[![InSpatial Dev](https://inspatial-storage.s3.eu-west-2.amazonaws.com/media/dev-badge.svg)](https://www.inspatial.dev)
[![InSpatial Cloud](https://inspatial-storage.s3.eu-west-2.amazonaws.com/media/cloud-badge.svg)](https://www.inspatial.cloud)
[![InSpatial App](https://inspatial-storage.s3.eu-west-2.amazonaws.com/media/app-badge.svg)](https://www.inspatial.app)
[![InSpatial Store](https://inspatial-storage.s3.eu-west-2.amazonaws.com/media/store-badge.svg)](https://www.inspatial.store)

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Discord](https://img.shields.io/badge/discord-join_us-5a66f6.svg?style=flat-square)](https://discord.gg/inspatiallabs)
[![Twitter](https://img.shields.io/badge/twitter-follow_us-1d9bf0.svg?style=flat-square)](https://twitter.com/inspatiallabs)
[![LinkedIn](https://img.shields.io/badge/linkedin-connect_with_us-0a66c2.svg?style=flat-square)](https://www.linkedin.com/company/inspatiallabs)

</div>

## 

<div align="center">

| InSpatial                                                                                                                     | Description                          | Link                                           |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ---------------------------------------------- |
| [![InSpatial Dev](https://inspatial-storage.s3.eu-west-2.amazonaws.com/media/dev-badge.svg)](https://www.inspatial.dev)       | Universal Libraries & Frameworks          | [inspatial.dev](https://www.inspatial.dev)     |
| [![InSpatial Cloud](https://inspatial-storage.s3.eu-west-2.amazonaws.com/media/cloud-badge.svg)](https://www.inspatial.cloud) | Backend APIs and SDKs                | [inspatial.cloud](https://www.inspatial.cloud) |
| [![InSpatial App](https://inspatial-storage.s3.eu-west-2.amazonaws.com/media/app-badge.svg)](https://www.inspatial.app)       | Build and manage your InSpatial apps | [inspatial.app](https://www.inspatial.app)     |
| [![InSpatial Store](https://inspatial-storage.s3.eu-west-2.amazonaws.com/media/store-badge.svg)](https://www.inspatial.store) | Deploy and discover InSpatial apps   | [inspatial.store](https://www.inspatial.store) |

</div>

---

## 🎨 InSpatial Theme (🟡 Preview)

A powerful, type-safe and headless theming system for Universal and Spatial applications with support for custom fonts, color schemes, and dynamic theme generation - can be extended to build your own custom component Library.

## 🌟 Features

- 📦 70+ Premium built-in (Primitive) fonts with full TypeScript support
- 🌐 Google Fonts Integration
- 🎯 Multi-theme variant support (Flat, Neutral, Soft, Brutal)
- 🔄 Real-time theme switching
- 📊 Built-in Design Variables (Tokens) with semantic naming
- 💪 A comprehensive color system with terminal utilities, RGB manipulation, APCA text contrast, and more...
- 🎨 Dynamic theme generation with light/dark mode support
- 🔒 Type-safe theme configuration and validation
- 🚀 Optimized font loading and fallback strategies
- 🧩 Modular and extensible architecture


## 📦 Install InSpatial Theme:

Choose your preferred package manager:

```bash
deno install jsr:@inspatial/theme
```

## 

```bash
npx jsr add @inspatial/theme
```

## 

```bash
yarn dlx jsr add @inspatial/theme
```

## 

```bash
pnpm dlx jsr add @inspatial/theme
```

## 

```bash
bunx jsr add @inspatial/theme
```

## 🛠️ Usage

### Step-by-Step Usage Guide

Follow these simple steps to get started with **InSpatial Theme**:

#### 1. **Initialize Theme**

```typescript
import { initTheme } from "@inspatial/theme"
const theme = initTheme()
```

#### 2. **Use Built-in Fonts**

```typescript
import { PrimitiveFontProps } from "@inspatial/theme"
// Access any of the 70+ premium fonts
const { actual, aeion, alternox } = PrimitiveFontProps
```

#### 3. **Generate Custom Theme**

```typescript
import { generateThemeMode } from "@inspatial/theme"
const customTheme = generateThemeMode("hsl(200, 100%, 50%)")
```

#### 4. **Theme Management**

```typescript
import { ThemeManager } from "@inspatial/theme"
// Get theme instance
const manager = ThemeManager.getInstance()
// Subscribe to theme changes
manager.subscribe((theme) => {
  console.log("Theme updated:", theme)
})
// Toggle dark mode
manager.toggleDarkMode()
```

#### 5. **Theme Variables**

```typescript
import { ThemeVariable } from "@inspatial/theme"
// Access predefined theme variables
const flatTheme = ThemeVariable.find((theme) => theme.variant === "flat")
```

#### 6. **Color System**

```typescript
import {
  bgBlue,
  generateColorVariables,
  inspatialColors,
  red,
  rgb24,
  rgb8,
  stripAnsiCode,
} from "@inspatial/theme"

// Access InSpatial's built-in HEX color palette
const {
  skyblack, // "#03082E"
  pop, // "#9000FF"
  trackloud, // "#EF0381"
  crystal, // "#8BD8F4"
} = inspatialColors

// Generate theme-aware CSS variables
const lightThemeVars = generateColorVariables(false)
const darkThemeVars = generateColorVariables(true)

// Terminal color utilities
console.log(red("Error:"), bgBlue("Status"))

// RGB color manipulation
// 24-bit RGB (16.7 million colors)
console.log(rgb24("Custom Color", 0xff00ff))
console.log(rgb24("Custom RGB", { r: 255, g: 0, b: 255 }))

// 8-bit RGB (256 colors)
console.log(rgb8("Paletted Color", 42))

// Remove ANSI color codes
const coloredText = red("Error!")
const plainText = stripAnsiCode(coloredText)

// CSS Variable Usage
const styles = {
  // Inline styles
  color: "var(--color-pop)",
  // Tailwind classes
  className: "text-[var(--color-crystal)]",
}
```

## 📚 API Reference

### Theme Components

- `ThemeManager`: Core class for managing theme state
- `generateThemeMode`: Function for generating theme color schemes
- `PrimitiveFontProps`: Collection of premium fonts
- `ThemeVariable`: Predefined theme configurations
  ...

### Typography Font Types

- `PrimitiveFontTypes`: Built-in premium fonts
- `GoogleFontTypes`: Google Fonts integration
- `AllFontVariants`: Union of all available fonts
  ...

### Theme Types

- `ThemeProps`: Main theme configuration interface
- `TypographyProps`: Typography configuration
- `ThemeFormatProps`: Color scheme configuration
  ...

### Color System

- `inspatialColors`: InSpatial's built-in HEX color palette
- `generateColorVariables`: Generate theme-aware CSS variables
- `rgb24`: 24-bit RGB color manipulation
- `rgb8`: 8-bit RGB color manipulation
- `stripAnsiCode`: Remove ANSI color codes
  ...

## 🎯 Best Practices

1. Use the built-in theme manager for consistent state management
2. Leverage TypeScript for type-safe theme configurations
3. Implement proper font loading strategies
4. Use CSS variables for dynamic theme updates
5. Follow the mobile-first responsive approach

## 📄 License

InSpatial Theme is released under the Apache 2.0 License. See the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <strong>Ready to build beautiful, consistent universal and spatial UIs?</strong>
  <br>
  <a href="https://www.inspatial.app">Start Building with InSpatial</a>
</div>
