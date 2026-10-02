// ୨୧ Cute Toolbox 資料檔 ୨୧
// 新增工具只要在 tools 陣列加一筆即可，UI 會自動產生卡片。
//
// 欄位說明：
//   id          唯一識別（收藏功能用，請勿重複、上線後不要隨意更改）
//   name        中文名稱
//   en          英文名稱（不顯示在卡片上，僅供搜尋）
//   icon        卡片上的大型顏文字 / Emoji（點擊可複製）
//   desc        一句介紹（不顯示在卡片上，僅供搜尋）
//   url         外部連結
//   cta         按鈕文字
//   tag         卡片左上角的分類小標籤
//   categories  所屬分類（對應下方 categories 的 id，可多選）
//   keywords    搜尋用關鍵字（中英文都可以）
//   tone        卡片底色：'pink' | 'cream' | 'lavender'
//   deco        卡片右下角的小貼紙 Emoji（每張不同）

export const categories = [
  { id: 'all', label: 'All', mark: '✿' },
  { id: 'kaomoji', label: 'Kaomoji', mark: '˶ᵔᵕᵔ˶' },
  { id: 'emoji', label: 'Emoji', mark: '🎀' },
  { id: 'symbols', label: 'Symbols', mark: '୨୧' },
  { id: 'fonts', label: 'Fonts', mark: '𝒜' },
  { id: 'tools', label: 'Tools', mark: '✂︎' },
]

export const tools = [
  {
    id: 'kaomoji-lab',
    name: '韓國顏文字',
    en: 'Kaomoji Lab',
    icon: '(∩˶˃•˂˶)◞⋆͛',
    desc: '9000+ 顏文字與各種情緒表情',
    url: 'https://snskeyboard.com/emoticon/',
    cta: '去找顏文字 ♡',
    tag: 'Kaomoji',
    categories: ['kaomoji'],
    keywords: ['韓國', '韓系', '顏文字', '表情', '情緒', '心情', '符號', 'kaomoji', 'emoticon', 'face', '日系'],
    tone: 'pink',
    deco: '🌷',
  },
  {
    id: 'kaomoji-collection',
    name: '點陣顏文字',
    en: 'Kaomoji Collection',
    icon: '⊹ ˖꒰ঌ ໒꒱.⋆˚',
    desc: '可愛、搞怪、療癒系顏文字合集',
    url: 'https://emojicombos.com/kaomoji',
    cta: '打開收藏庫 ♡',
    tag: 'Kaomoji',
    categories: ['kaomoji'],
    keywords: ['點陣', '顏文字', '可愛', '搞怪', '療癒', '合集', 'kaomoji', 'collection', 'cute', 'funny'],
    tone: 'cream',
    deco: '🥨',
  },
  {
    id: 'dot-art-maker',
    name: '粉嫩點陣圖',
    en: 'Dot Art Maker',
    icon: '₊˚⊹ ▪︎♡▪︎ ⊹˚₊',
    desc: '把圖片變成可複製的點陣藝術',
    url: 'https://cuteinternet.com/image-to-dot-art',
    cta: '開始變魔法 ♡',
    tag: 'Tools',
    categories: ['tools', 'symbols'],
    keywords: ['粉嫩', '點陣', '圖片', '轉換', '藝術', '產生器', 'dot', 'art', 'braille', 'image', 'generator', '工具'],
    tone: 'lavender',
    deco: '🩰',
  },
  {
    id: 'bear-emoji',
    name: '灰灰符號屋',
    en: 'Bear Emoji',
    icon: '⋆✴︎˚｡⋆ 🎂 ༘⋆',
    desc: '熊熊 Emoji、顏文字與特殊符號收藏',
    url: 'https://emojidb.org/bear-emojis',
    cta: '去灰灰屋 ♡',
    tag: 'Emoji',
    categories: ['emoji', 'kaomoji', 'symbols'],
    keywords: ['灰灰', '符號屋', '熊', '熊熊', '小熊', '動物', 'bear', 'teddy', 'emoji', '顏文字', '符號'],
    tone: 'cream',
    deco: '🧸',
  },
  {
    id: 'aesthetic-emoji',
    name: '粉嫩符號屋',
    en: 'Cute Emoji',
    icon: '₊ ⊹🎀 *ੈ',
    desc: '夢幻、少女系 Emoji 組合',
    url: 'https://cuteinternet.com/emojis',
    cta: '去粉嫩屋 ♡',
    tag: 'Emoji',
    categories: ['emoji'],
    keywords: ['粉嫩', '符號屋', 'emoji', '表情符號', '夢幻', '少女', '組合', 'aesthetic', 'cute', 'combo', '可愛'],
    tone: 'pink',
    deco: '🎀',
  },
  {
    id: 'instagram-fonts',
    name: 'IG 字體',
    en: 'Instagram Fonts',
    icon: '𝓬𝓾𝓽𝓮 ♡',
    desc: '快速產生 IG Bio、貼文可用特殊字體',
    url: 'https://tw.piliapp.com/instagram/fonts/',
    cta: '產生字體 ♡',
    tag: 'Fonts',
    categories: ['fonts', 'tools'],
    keywords: ['字體', '字型', 'IG', 'instagram', 'bio', '貼文', '花體', '特殊字', 'font', 'fonts', 'text', '工具'],
    tone: 'lavender',
    deco: '🧁',
  },
  {
    id: 'ribbon-symbols',
    name: '長串符號庫',
    en: 'Ribbon Symbols',
    icon: '˗ˏˋ꒒০⌵୧♡ೀ',
    desc: '蝴蝶結、愛心、星星與 Aesthetic Symbols',
    url: 'https://symbolcombos.com/',
    cta: '去找長串符號 ♡',
    tag: 'Symbols',
    categories: ['symbols'],
    keywords: ['長串', '長串符號', '蝴蝶結', '愛心', '星星', '符號', '特殊符號', 'ribbon', 'bow', 'heart', 'star', 'aesthetic', 'symbol'],
    tone: 'pink',
    deco: '🍥',
  },
]

// Today's Cute Pick 隨機符號池
export const cutePicks = [
  'ꔛ',
  '୨୧',
  '₊˚⊹♡',
  'ʕ•ᴥ•ʔ',
  '૮ ˶ᵔ ᵕ ᵔ˶ ა',
  '⋆｡˚୨୧˚｡⋆',
  '♡₊˚ 🦢・₊✧',
  '꒰ঌ♡໒꒱',
  '₊˚⊹ ᰔ',
  '( ˶ˆᗜˆ˵ )',
  '⊹ ࣪ ˖ 🎀 ˖ ࣪ ⊹',
  '·͙⁺˚*•̩̩͙✩•̩̩͙*˚⁺‧͙',
  '୭‌ ‧₊˚ ⋅ ♡',
  '₍ᐢ. .ᐢ₎ ♡',
]
