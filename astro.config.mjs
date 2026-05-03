// astro.config.mjs — psipsina
//
// 【役割】
// Astroプロジェクト全体の設定ファイル。
//
// 【注意】
// Cloudflare adapter はデプロイ時に追加します。
// ローカル開発中は不要なので入れていません。
//
// デプロイ準備ができたら以下を追加：
//   npm install @astrojs/cloudflare
//   adapter: cloudflare() を defineConfig に追加

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // MDX統合
  // .mdx ファイル内で <Img> や <Grid> などのコンポーネントが使えます
  integrations: [
    mdx(),
  ],

  // サイトのURL（OGP画像URLなどに使用）
  site: 'https://psipsina.com',

  adapter: cloudflare(),
});