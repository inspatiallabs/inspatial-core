<div align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://inspatial-storage.s3.eu-west-2.amazonaws.com/media/icon-brutal-light.svg">
        <source media="(prefers-color-scheme: light)" srcset="https://inspatial-storage.s3.eu-west-2.amazonaws.com/media/icon-brutal-dark.svg">
        <img src="https://inspatial-storage.s3.eu-west-2.amazonaws.com/media/icon-brutal-dark.svg" alt="InSpatial" width="300">
    </picture>

<br>
   <br>

<p align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://inspatial-storage.s3.eu-west-2.amazonaws.com/media/logo-light.svg">
        <source media="(prefers-color-scheme: light)" srcset="https://inspatial-storage.s3.eu-west-2.amazonaws.com/media/logo-dark.svg">
        <img src="https://inspatial-storage.s3.eu-west-2.amazonaws.com/media/logo-dark.svg" height="75" alt="InSpatial">
    </picture>
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

## 🛠️ InSpatial util (🟢 Stable)

InSpatial util is your Swiss Army knife for universal and spatial application development. It provides a collection of powerful, type-safe utility functions to streamline your workflow and enhance your projects.

## 🚀 Features

- 🧰 Comprehensive set of utility functions for common tasks, enhancing productivity and efficiency.
- 🎨 Tailwind CSS class merging with `kit` and `cKit` for seamless styling.
- 📅 Advanced calendar and date manipulation utilities for precise time management.
- 🔢 Array and mathematical helpers to simplify complex operations.
- 🔍 Focus and input styling utilities to improve user interface interactions.
- 🔀 Array shuffling and manipulation functions for dynamic data handling.
- 📄 Extensive text and data formatting utilities for clean and readable outputs.
- 🌐 Domain and URL utilities for robust web application development.
- 🔧 TypeScript type utilities for safer and more reliable code.
- 📊 Data extraction and manipulation tools for effective data processing.
- 🌍 Country and encoding utilities for internationalization and data encoding needs.
- ... and more!

These features make InSpatial util a powerful toolkit for developers working on universal and spatial applications.



## 📦 Install InSpatial Util:

Choose your preferred package manager:

```bash
deno install jsr:@inspatial/util
```

## 

```bash
npx jsr add @inspatial/util
```

## 

```bash
yarn dlx jsr add @inspatial/util
```

## 

```bash
pnpm dlx jsr add @inspatial/util
```

## 

```bash
bunx jsr add @inspatial/util
```


## 🛠️ Available Utilities

InSpatial util includes the following utility functions:

1. `capitalize`: Capitalizes the first letter of a string.
2. `kit` and `cKit`: Tailwind CSS class and styled merging utilities.
3. `shuffle`: Randomly shuffles an array.
4. `shuffled`: Returns a new array with shuffled elements.
5. `focusInput`, `hasErrorInput`, `focusRing`: Input styling utilities for focus and error states.
6. `range`: Generates an array of numbers within a specified range.
7. `milliseconds`: Converts time units to milliseconds.
8. `crossArray`: Crosses two arrays to produce a Cartesian product.
9. `dedupe`: Removes duplicate elements from an array.
10. `eq`: Checks for deep equality between two values.
11. `random`: Generates a random number within a specified range.
12. `swap`: Swaps two elements in an array.
13. `trackDebug`: Utility for tracking and debugging.
14. `domainMatcher`: Matches a domain against a list of patterns.
15. `prettify`: Formats data into a more readable form.
16. `format`: Formats strings with placeholders.
17. `formatTime`: Formats time values into human-readable strings.
18. `getRandomKitColors`: Generates random color schemes for UI components.
19. `mergeRef`: Merges multiple React refs into one.
20. `generateUniqueId`: Generates a unique identifier.
21. `copyToClipboard`: Copies a URL to the clipboard and executes an optional callback.
22. `openLink`: Opens a URL in a new browser tab.
23. `printPage`: Triggers the browser's print dialog for the current page.
24. `replaceNonDigits`: Removes non-digit characters from a string.
25. `currency`: Formats numbers as currency strings.
26. `share`: Shares content using the Web Share API.
27. `dateTime`: Utilities for date and time manipulation.
28. `ulid`: Generates a Universally Unique Lexicographically Sortable Identifier.
29. `csv`: Parses and generates CSV data.
30. `extractor`: Extracts specific data from a larger dataset.
31. `text`: Text manipulation utilities.
32. `collection`: Provides collection utilities from the standard library.
33. `countries`: Utilities for handling country data.
34. `encoding`: Utilities for encoding and decoding data.
35. `regexEscape`: Escapes special characters in a regex pattern.
36. `types`: Type utilities for TypeScript.
37. `buildMessage`: Constructs a formatted message to represent differences between data sets.
38. `sameStart`: Checks if two strings start with the same sequence.
39. `farthestPoint`: Finds the farthest point in a dataset.
40. `difference`: Calculates the difference between two datasets.

For detailed usage and parameters of each utility, please refer to the source code or our comprehensive documentation.

---

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
  <a href="https://www.inspatial.dev">Get Started with InSpatial util</a>
</div>
