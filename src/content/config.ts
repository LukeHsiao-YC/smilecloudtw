import { defineCollection, z } from 'astro:content';
// 匯入最新版系統專用的抓取器
import { glob } from 'astro/loaders';

const blog = defineCollection({
    // 加上 loader 讓最新版 Astro 找得到衛教文章
    loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.coerce.date().optional(),
        pubDate: z.coerce.date().optional(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.optional(image()),
        category: z.string().optional(),
        series: z.string().optional(),
        tags: z.array(z.string()).optional(),
        recommend: z.boolean().optional(),
    }),
});

const guideline = defineCollection({
    // 關鍵！必須告訴 Astro 去這個資料夾抓 .md 檔
    loader: glob({ base: './src/content/guideline', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title: z.string().optional(),
    }),
});

export const collections = { blog, guideline };