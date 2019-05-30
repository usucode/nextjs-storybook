# Next.jsで静的サイトもいける環境構築

- Next.jsはReactのSPAのデメリットであるSEO対策(SSR)のために生まれたフレームワークです。
- PWAもデスクトップアプリ(Electron)も静的なサイトにジェネレートすることもできます。
- シンプルな環境構築はGithubから一発で構築！
- Storybookもついでに構築！

## How to uses

まずは、ダウンロードしてインストール

```bash
git clone git@github.com:usu-blog/nextjs-storybook.git
mv next-static-sample my-site
cd my-site
yarn
```

- 開発

```bash
yarn dev
```

- SSRで常時起動

```bash
yarn build
yarn start
```

- 静的サイトにビルド

```bash
yarn build
yarn export
```

outというディレクトリが静的なサイトにoutputしたものです。

## Environment

- `tree`

```
.
├── components/
├── next.config.js
├── package.json
├── pages/
├── server.js
└── .gitignore
```

- `package.json`

```json
{
  "name": "nextjs-sample",
  "version": "1.0.0",
  "description": "Next.js sample site",
  "main": "index.js",
  "scripts": {
    "dev": "node server.js",
    "build": "next build",
    "start": "NODE_ENV=production node server.js",
    "export": "next export"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "next": "^8.1.0",
    "react": "^16.8.6",
    "react-dom": "^16.8.6"
  }
}
```

- `.prettierrc.yml`

```yml
trailingComma: "es5"
tabWidth: 2
semi: false
singleQuote: false
```

## おまけ: Storybookの環境構築

- インストール

```bash
yarn add -D @storybook/react babel-loader @babel/core
```

- `.storybook/config.js`

```js
import { configure } from "@storybook/react"

function loadStories() {
  require("../stories")
}

configure(loadStories, module)
```

- `src/stories/index.jsx`

```jsx
import React from "react"
import { storiesOf } from "@storybook/react"
import { Button } from "@storybook/react/demo"

storiesOf("Components/Button", module)
  .add("with text", () => (
    <Button variant="contained" color="primary">
      Hello Button
    </Button>
  ))
  .add("with emoji", () => (
    <Button variant="contained">
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
```

- `package.json`

```json
  "scripts": {
    "dev": "node server.js",
    "build": "next build",
    "start": "NODE_ENV=production node server.js",
    "export": "next export",
    "storybook": "start-storybook"
  },
```

### addon追加！

```bash
yarn add -D @storybook/addon-actions @storybook/addon-knobs @storybook/addon-notes @storybook/addon-viewport @storybook/addon-backgrounds
```

- `.storybook/addons.js`

```js
import "@storybook/addon-actions/register"
import "@storybook/addon-knobs/register"
import "@storybook/addon-notes/register"
import "@storybook/addon-viewport/register"
import "@storybook/addon-backgrounds/register"
```

- `src/stories/index.jsx`

```jsx
import React from "react"
import { storiesOf } from "@storybook/react"
import { Button } from "@storybook/react/demo"

storiesOf("Components/Button", module)
  .addParameters({
    backgrounds: [
      { name: "white", value: "#fff", default: true },
      { name: "dark", value: "#555" },
    ],
  })
  .add(
    "with text",
    () => (
      <Button variant="contained" color="primary">
        Hello Button
      </Button>
    ),
    { notes: "# Sample button 1" }
  )
  .add(
    "with emoji",
    () => (
      <Button variant="contained">
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </Button>
    ),
    { notes: "# Sample button 2" }
  )
```
