<p align="center">
<img src="https://i.ibb.co/9cSn6kV/DALL-E-2024-01-31-15-38-28-A-vibrant-and-minimalist-logo-design-for-Cirquee-a-React-Native-Expo-fram.png" width="300" height="300" alt="Cirquee logo">
</p>

Cirquee is a React Native boilerplate template with Expo, TypeScript, Storybook, and other features. It is a highly opinionated boilerplate that contains everything I personally need to start working on a mobile application. It can do everything and yet nothing. It provides a simple configuration and clear TODOs. The processes for starting the development of an application no longer need to be done over and over again. It strives to use all the latest technologies and practices so that it does not become outdated but remains well usable.

And why the name Cirquee? Because until now, developing a new application was a big circus for me. I had my own specific package for each application, in which I worked. Complete chaos, mess, and circus. Cirquee changes this and creates order in the chaos.

## 📚 Features

- [x] Expo - Built with Expo for cross-platform support
- [x] 🎯 Absolute imports - For better imports and code organization
- [x] 📝 Conventional commits git hook - For enforcing conventional commits
- [x] 🛠️ Improved TypeScript - With ts-reset library for ultimate type safety
- [x] 🩹 Patch-package - For patching dependencies
- [x] 💻 T3 Env - For environment variables management
- [x] 📊 Bundle analyzer plugin - For analyzing bundle size
- [x] 📕 Storybook - For isolating and testing UI components (pnpx storybook@latest init) https://github.com/storybookjs/react-native
- [x] 🗄️ Auto Sort Imports - Automatic organizing of imports on file saves.
- [x] 🗄️ Axios for API requests
- [x] Web support
- [x] Jotai for state management
- [x] SVG support
- [x] React Navigation
- [x] Fonts by default
- [x] Easy configurable navigation (stack / tabs / drawer)
- [x] Dynamic font loading
- [x] Translations by default (i18n)
- [x] Expo notifications support
- [x] Console emoji logs
- [x] DEV / PROD environment configs
- [x] PNPM support
- [x] Fonts list generator
- [x] [FlashList](https://shopify.github.io/flash-list/docs/)
- [x] Prohibit the use of ANY
- [x] Message toaster
- [x] Image list generator
- [x] Store screenshots package

## 🚦 Roadmap

- [ ] Add deeplinks (notifications)
- [ ] [TanstackQuery](https://tanstack.com/query/v3/docs/framework/react/overview)
- [ ] Dynamic input generation of .env
- [ ] Evolu
- [ ] Dark / Light theme - https://blog.logrocket.com/building-react-native-theme-switcher-app/ maybe https://www.nativewind.dev/api/use-color-scheme
- [ ] Fix storybook

## Maybe?

- [ ] In future add Expo navigation (not stable yet)
- [ ] Expo navigation vercel API
- [ ] Assets generator for Storybook
- [ ] Analytics by default
- [ ] Crashlytics by default

## Need to be added to docs

- [ ] Notifications documentation (init, tokens, etc.)
- [ ] Automatic publish updates
- [ ] Update notes convetions
- [ ] Flashlist documentation

## Setup

1. Clone the repo
2. Run `pnpm i`
3. Setup .env file
4. Run `pnpm ios` or `pnpm android
5. Profit

## Features

### Absolute Imports

Clean code and code writing easier.
Preconfigured by default.

### Conventional Commits

Configured with [commitlint](https://github.com/conventional-changelog/commitlint) to automatically validate commit messages following the [conventional-commits](https://www.conventionalcommits.org/en/v1.0.0/) standard.

**fix**: Fixes a bug that improves functionality without adding new features.
**feat**: Adds a new feature or significantly expands an existing one.
**build**, chore, ci: These types relate to tools and processes such as build scripts, project maintenance, or integration.
**docs**: Updating or adding documentation.
**style**: Changes that do not affect the meaning of the code (formatting, whitespace, etc.).
**refactor**: Code changes that neither fix a bug nor add a feature, but improve the code structure.
**perf**: Enhances code performance.
**test**: Adding or fixing tests.

### TS-Reset | Extremely Strict Typescript

TypeScript's default type declarations may have imperfections, but [ts-reset](https://github.com/total-typescript/ts-reset) enhances them.

### Patch Package

Configured with [patch-package](https://github.com/ds300/patch-package) to patch dependencies as needed.
For eg: `npx patch-package package-name`

### Bundle Analyzer

Configured with [react-native-bundle-analyzer](https://github.com/IjzerenHein/react-native-bundle-visualizer)</br>
Run `yarn analzye:bundle` which generates bundle map and show you what's inside of your react-native bundle

### Auto Sort Imports

Automatically organize imports on file saves. Be sure to enable on your user settings for better experience.

```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
```

### T3 Env

Configured with [t3-oss/env-core](https://github.com/t3-oss/t3-env).
Typesafe environment variables management integrated along with [zod](https://github.com/colinhacks/zod).

### Storybook

Configured with [storybook-react-native](https://github.com/storybookjs/react-native) to isolate and test UI components. Configured with global decorators and easy to write storybook under each components.

### FlashList

```<FlashList
  renderItem={({ item }) => {
    return <TweetCell item={item} />;
  }}
  estimatedItemSize={50}
  data={tweets}
/>;
```
