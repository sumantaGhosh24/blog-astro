import {glob} from "astro/loaders";
import {defineCollection, z} from "astro:content";

const blog = defineCollection({
  loader: glob({base: "./src/content/blog", pattern: "**/*.{md,mdx}"}),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()),
    category: z.array(z.string()),
    author: z.object({
      name: z.string(),
      image: z.string(),
      occupation: z.string(),
      url: z.string(),
    }),
  }),
});

export const collections = {blog};
