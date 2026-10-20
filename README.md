# awei履歷 

[網頁連結](https://wei10cool.github.io/resume/)

## 環境
有使用過可運行的環境
node 24.16
node 24.22

使用nvm切換node 版本
```
nvm use 24.16  
```
有設定baseURL 在nuxt.config.ts  

## 只更新清單
```bash
 npm run projects:index  
```  
掃描資料夾「projects」  
更新 index.json  
不執行 Nuxt generate  
不會產生完整 .output  
  
## Other  
生成靜態網頁，會自動生成資料夾[.output]  

## 注意  
每次PUSH上gitHub會自動執行```npm run generate```至GitHub Pages  
因gitHub上的repository已有設定Action動作  
要能正常瀏覽頁面需要設定repository為 [**公開**] 

## 架構  
- 主頁面 pages/index.vue  
  - 個人 components/HeroSection  
  - 技能 components/SkillSection  
  - 經歷 components/ExperienceSection  
  - 作品 components/ProjectSection  

## 生成佈署檔  
```bash
npm run generate
```
## 設定  
安裝相關套件  
```bash
# npm
npm install
```

## 開發  
Start the development server on `http://localhost:3000`:
```bash
# npm
npm run dev
```
## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```