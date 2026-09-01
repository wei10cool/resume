# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## 環境
node 24.16

切換node 版本
nvm use 24.16

## 只更新清單
npm run projects:index  
掃描 projects  
更新 index.json  
不執行 Nuxt generate  
不產生完整 .output  
  
## Other  
生成靜態網頁，會自動生成資料夾[.output]  

## 注意  
每次PUSH上gitHub會自動執行```npm run generate```至GitHub Pages  
要能正常瀏覽頁面需要設定repository為 <span style="color:red">公開</span>  

```bash
npm run generate
```
## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```