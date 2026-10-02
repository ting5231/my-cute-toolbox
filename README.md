# 🎀 Cute Toolbox

♡ cute things for your internet life ♡

可愛文字、顏文字、Emoji、特殊符號與字體工具的入口網站。React + Vite + Tailwind CSS，純前端，不需要後端或登入。

## 開始

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # 輸出到 dist/
npm run preview  # 本機預覽 build 結果
```

需要 Node.js 18 以上（建議 20）。

## 部署

**Netlify**：把專案推上 GitHub → Netlify「Add new site」→ 選 repo。`netlify.toml` 已設定好（build：`npm run build`，publish：`dist`）。也可以直接把 `npm run build` 產生的 `dist/` 資料夾拖曳到 Netlify Drop。

**Vercel**：Import repo，Framework 會自動偵測為 Vite；`vercel.json` 已設定好。

## 專案結構

```
src/
  components/
    Header.jsx          頂部導覽（手機版漢堡選單）
    Hero.jsx            首頁主視覺 + 漂浮裝飾
    FavoritesToggle.jsx My Favorites 切換按鈕
    ToolCard.jsx        工具卡片（收藏、點擊複製顏文字）
    CutePick.jsx        Today's Cute Pick 隨機符號
    About.jsx           關於 / 使用小提示
    Toast.jsx           Copied ♡ 提示
    Footer.jsx
  data/tools.js         ★ 工具與隨機符號資料都在這裡
  hooks/useFavorites.js 收藏（localStorage）
  utils/clipboard.js    複製到剪貼簿（含舊瀏覽器 fallback）
  App.jsx
  index.css             全域樣式（點點背景、蕾絲邊、紙膠帶）
tailwind.config.js      色票、字體、動畫
```

## 新增工具

在 `src/data/tools.js` 的 `tools` 陣列加一筆：

```js
{
  id: 'my-tool',              // 唯一，收藏用
  name: '中文名稱',
  en: 'English Name',
  icon: '( ˶ˆᗜˆ˵ )',
  desc: '一句介紹',
  url: 'https://example.com',
  cta: '前往 ♡',
  tag: 'Symbols',
  categories: ['symbols'],    // kaomoji / emoji / symbols / fonts / tools
  keywords: ['關鍵字', 'keyword'],
  tone: 'pink',               // pink | cream | lavender
  deco: '✦',
}
```

## 功能

- My Favorites ♡ 可切換只看收藏的工具
- 收藏存在 `localStorage`（key：`cute-toolbox:favorites`），網址 `#favorites` 可直接開啟收藏
- 點卡片上的大顏文字可直接複製
- 所有外部連結皆為 `target="_blank" rel="noopener noreferrer"`
- 支援 `prefers-reduced-motion`，鍵盤可完整操作
