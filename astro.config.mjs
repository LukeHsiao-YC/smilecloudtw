import { defineConfig } from 'astro/config';

// 這是告訴 Astro 你的正式網址是什麼
// 這樣未來產生 sitemap 或文章網址時才不會出錯
export default defineConfig({
  site: 'https://smilecloud.tw',
});