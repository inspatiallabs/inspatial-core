<div align="center">
    <a href="https://inspatiallabs.com" target="_blank">
    <p align="center">
    <picture>
      <source media="(prefers-color-scheme: light)" srcset="https://inspatial-storage.s3.eu-west-2.amazonaws.com/media/icon-brutal-dark.svg">
      <source media="(prefers-color-scheme: dark)" srcset="https://inspatial-storage.s3.eu-west-2.amazonaws.com/media/icon-brutal-light.svg">
      <img src="https://inspatial-storage.s3.eu-west-2.amazonaws.com/media/icon-brutal-dark.svg" alt="InSpatial" width="300">
    </picture>
    </p>
    </a>

   <br>

  <h1 align="center">InSpatial Style Guide</h1>

  <h3 align="center">
    A comprehensive guide for maintaining clean, consistent, and maintainable code across the InSpatial ecosystem
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

---

## 📋 Table of Contents

- [💫 Core Principles](#-core-principles)
- [📚 Code Standards](#-code-standards)

  - [📦 ESM Modules Only](#-esm-modules-only)
  - [🔒 Deno APIs](#-deno-apis)
  - [📝 Simple File Names](#-simple-file-names)
  - [⚡ Type Performance](#-type-performance)
  - [🚫 Dependencies](#-dependencies)
  
  - [Technical Standards](#technical-standards)
    - [🎨 Shaders](#-shaders)
    - [🔄 Programming Patterns](#-programming-patterns)
    - [✍️ Variable Naming](#️-variable-naming)
    - [📁 File Structure](#-file-structure)
  - [InSpatial Ecosystem](#inspatial-ecosystem)

- [🏷️ Naming Conventions](#️-naming-conventions)
  - [General Rules](#general-rules)
  
- [✏️ TypeScript](#-typescript)
  - [Type Definitions](#type-definitions)
  - [Compiler Configuration](#compiler-configuration)
  - [Best Practices](#best-practices)
- [🧪 Test Structure and Organization](#-test-structure-and-organization)
- [💭 Comments](#-comments)

---

## 💫 Core Principles

| Principle | Description |
|-----------|-------------|
| **Readability First** | Code should be written with the next developer in mind |
| **Consistency Matters** | Follow established patterns throughout the project |
| **Self-Explanatory Code** | Write intuitive code that requires minimal comments |
| **Comprehensive Documentation** | Document following [InSpatial Doc Rules](.inspatialdocrules) |


## 📚 Code Standards

| Standard | Description | Guidelines |
|----------|-------------|------------|
| 📦 **ESM Modules** | Use ECMAScript Modules exclusively | • Avoid CommonJS modules<br>• Use `import/export` syntax |
| 🔒 **Deno APIs** | Prefer Deno over Node.js APIs | • Use provided Deno API abstractions<br>• Follow secure practices |
| 📝 **File Names** | Cross-platform compatible naming | • Avoid `*`, `:`, `?`<br>• No case-only differences<br>• Use kebab-case |
| ⚡ **Type Performance** | Avoid "slow types" | • Follow [JSR slow types guide](https://jsr.io/docs/about-slow-types)<br>• Use efficient type patterns <br>• Follow [Typescript's Performance Rules](https://github.com/microsoft/TypeScript/wiki/Performance) |
| 🚫 **Dependencies** | No native binary dependencies | • Pure TypeScript preferred<br>• Use WASM for native functionality |

### Technical Standards

| Category | Guidelines | Tools & Resources |
|----------|------------|-------------------|
| 🎨 **Shaders** | • Use WGSL or TSL<br>• WebGL 2.0 compatibility | [@inspatial/util](https://inspatial.dev/) |
| 🔄 **Programming Patterns** | • Functional programming<br>• Declarative patterns | [Patterns.dev](https://www.patterns.dev/) |
| ✍️ **Variable Naming** | • Use auxiliary verbs<br>• Self-documenting names | Examples:<br>`isLoading`<br>`hasError` |
| 📁 **File Structure** | 1. Exported components<br>2. Subcomponents<br>3. Helpers<br>4. Static content<br>5. Types | Keep consistent order |

### InSpatial Ecosystem

| Tool | Purpose | Usage |
|------|---------|-------|
| [InSpatial Kit](https://inspatial.dev/kit) | Component Construction | Primary UI building blocks |
| [InSpatial ISS](https://inspatial.dev/iss) | Styling | Styling system |
| [InSpatial Util](https://inspatial.dev/util) | Utilities | Common utilities |
| [InSpatial Infetch](https://inspatial.dev/infetch) | HTTP Requests | API communication |
| [Motion](https://motion.dev/) | Animations | JavaScript animations & transitions |

---

## 🏷️ Naming Conventions

| Type | Convention | Example | Additional Rules |
|------|------------|---------|-----------------|
| Variables | camelCase | `userData` | Use descriptive names that convey intent |
| Components | PascalCase | `UserProfile` | - |
| Files/Directories | kebab-case | `user-profile.ts` | - |
| Types/Interfaces | PascalCase + Prop | `UserProp` | Must start with uppercase letter |
| Private Variables | underscore prefix | `_privateData` | - |
| Functions | camelCase | `fetchUserData` | - |
| Constants | SCREAMING_SNAKE_CASE | `MAX_RETRY_COUNT` | - |
| Boolean Variables | camelCase with prefix | `isLoading`, `hasError` | Use prefixes: is, has, should, can, etc. |
| Event Handlers | camelCase with 'handle' prefix | `handleClick` | - |


### General Rules
- Avoid abbreviations unless widely understood (e.g., `id` is fine, but `usr` is not)
- Names should be self-documenting and clearly indicate purpose
- Keep naming consistent across related entities

---

## ✏️ TypeScript

### Type Definitions
| Practice | Do | Don't | Reason |
|----------|----|----|--------|
| Type Annotations | `function foo(): BazType` | `function foo()` | Helps compiler work faster with explicit types |
| Type Composition | `interface Foo extends Bar, Baz` | `type Foo = Bar & Baz` | Interfaces create cached, flat object types |
| Base Types | `interface Animal { ... }` | `type Animal = Dog \| Cat` | Reduces type comparison complexity |
| Complex Types | `type ComplexType = { ... }` | Inline complex types | Named types are more compact and cacheable |

### Compiler Configuration
| Flag | Purpose | Impact |
|------|---------|--------|
| `--incremental` | Save compilation state | Recompiles only changed files |
| `--skipLibCheck` | Skip `.d.ts` checking | Faster compilation by skipping verified types |
| `--strictFunctionTypes` | Optimize type checks | Reduces assignability checks between types |

### Best Practices
- Use explicit return types on exported functions
- Prefer interfaces over type intersections for better caching
- Name complex types instead of using anonymous types
- Use base types instead of large union types
- Keep type hierarchies shallow when possible
- Use **ES6+ syntax**: arrow functions, destructuring, template literals, etc.
- Avoid `any` unless absolutely necessary. Use strict and explicit typing.
- Follow [Typescript's Performance Rules](https://github.com/microsoft/TypeScript/wiki/Performance)

### Example
```typescript
// ✅ Do: Use interfaces and explicit types
interface UserData {
  id: string;
  name: string;
}

// ✅ Do: Use ES6+ syntax with strict typing
function fetchUser(id: string): Promise<UserData> {
  return inFetch(`/users/${id}`);
}
```

```typescript
// ❌ Don't: Use type intersections and implicit types
type UserData = BaseUser & {
  extraData: unknown;
}

// ❌ Don't: Use type intersections and implicit types
function fetchUser(id) {
  return inFetch(`/users/${id}`);
}
```


## 🧪 Test Structure and Organization

- Use **InSpatial Test** for all types of tests
- Place tests next to the relevant file
- Use one of these naming patterns:
  - `file.test.ts` (preferred)
  - `file_test.ts`
- Write meaningful test descriptions and cover edge cases
- Check test coverage using `deno test --coverage`
- Follow **[InSpatial Test Rules](.inspatialtestrules)**.

### Running Tests
```bash
# Run all tests
deno test

# Run specific test suite
deno test packages/core

# Run with coverage
deno test --coverage
```

### Test Examples
```typescript
import { test } from "@inspatial/test";

// Prefer object style for tests 

// ✅ Do: Descriptive test names and comprehensive test cases
test({
  name: "Button renders with correct label",
  fn: () => {
    const user = await fetchUser('123');
    expect(user).toHaveProperty('id', '123');
  }
});

describe('fetchUser', () => {
  it('returns a user object when the request is successful', async () => {
    const user = await fetchUser('123');
    expect(user).toHaveProperty('id', '123');
  });

  it('throws an error when the user ID is invalid', async () => {
    await expect(fetchUser('')).rejects.toThrow('Invalid user ID');
  });
});
```

```typescript
// ❌ Don't: Vague test names or incomplete coverage
test({
  name: "button test",
  fn: () => {
    // ...
  }
});
```

## 📝 Comments
- **When to Comment**:
  - Use comments to explain **why**, not **what**.  
    The code should already explain what it does.
  - Document complex logic or unusual decisions.

**Example:**
```typescript
/**
 * Fetches a user by ID from the server.
 *
 * @param id - The ID of the user to fetch.
 * @returns A promise resolving to the user object.
 */
function fetchUser(id: string): Promise<User> {
  return inFetch(`/users/${id}`);
}
```

