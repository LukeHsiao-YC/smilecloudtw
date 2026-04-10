import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
    // 確保路徑指向你的文章存放處
    loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            // 同時支援 date 或 pubDate，並轉換成日期格式
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

// 幫你新增的臨床指引設定，讓系統認識它
const guideline = defineCollection({
    loader: glob({ base: './src/content/guideline', pattern: '**/*.{md,mdx}' }),
    schema: () =>
        z.object({
            title: z.string().optional(),
        }),
});

// 記得把 guideline 一起打包匯出
export const collections = { blog, guideline };