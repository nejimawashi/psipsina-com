// src/content.config.ts — psipsina
//
// 【役割】
// Content Collections の設定ファイル（Astro v5以降の新しい書き方）
//
// 【Astro v5での変更点】
// - ファイルの場所：src/content/config.ts → src/content.config.ts
// - loaderの明示が必要になりました
//
// 【コレクション構成】
// src/content/psipsina/
//   └── index.mdx        ← トップページ（Obsidianで編集）
//   └── stollen2025.mdx  ← シュトレンページ（予定）
//   └── semla2025.mdx    ← セムラページ（予定）
//   └── legal-notice.mdx ← 特定商取引法（予定）
//   └── terms.mdx        ← 利用規約（予定）

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ── psipsina コレクション ──────────────────────────────────────
const psipsina = defineCollection({
  // glob loader: src/content/psipsina/ 以下の .mdx と .md を読み込む
  loader: glob({
    pattern: 'index.{md,mdx}',
    base: './src/content/psipsina',
  }),

  schema: z.object({
    // ページタイトル（省略可 — frontmatterなしの古いファイルも読み込めます）
    title: z.string().optional(),

    // SEO用の説明文（省略可）
    description: z.string().optional(),

    // OGP画像のパス（省略可）
    ogImage: z.string().optional(),

    // 下書き状態（省略可、デフォルトは false）
    draft: z.boolean().optional().default(false),

    // 最終更新日（省略可）
    updatedAt: z.coerce.date().optional(),
  }),
});

// ── エクスポート ──────────────────────────────────────────────
export const collections = {
  psipsina,
};
