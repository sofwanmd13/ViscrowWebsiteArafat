import type { ComponentType } from "react";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  image?: string;
  tags?: string[];
};
export type Post = PostMeta & { Component: ComponentType<any> };

const modules = import.meta.glob("../posts/*.mdx", { eager: true }) as Record<
  string,
  { default: ComponentType<any>; meta: Omit<PostMeta, "slug"> }
>;

const posts: Post[] = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = path.split("/").pop()!.replace(/\.mdx?$/, "");
    return {
      slug,
      title: mod.meta.title,
      date: mod.meta.date,
      description: mod.meta.description,
      image: mod.meta.image,
      tags: mod.meta.tags,
      Component: mod.default,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export default posts;
