import blogThreePost from "./blog-3/post";
import blogOnePost from "./blog-1/post";

export type BlogContentBlock =
    | { type: "paragraph"; text: string }
    | { type: "heading"; text: string }
    | { type: "image"; src: string; alt: string; caption: string }
    | { type: "code"; language: string; code: string }
    | {
        type: "interactive";
        prompt: string;
        actionLabel: string;
        successLabel: string;
        successMessage: string;
    }
    | { type: "dragReveal"; prompt: string; image: string; imageAlt: string }
    | { type: "scratchReveal"; prompt: string; leadIn: string; murdererName: string }
    | { type: "definition"; id: string; term: string; definition: string };

export type BlogPost = {
    slug: string;
    title: string;
    publishedAt: string;
    image: string;
    imageAlt: string;
    excerpt: string;
    body: BlogContentBlock[];
};

export const blogPosts: BlogPost[] = [blogOnePost, blogThreePost];

export const dictionaryEntries = blogPosts.flatMap((post) =>
    post.body.flatMap((block) =>
        block.type === "definition"
            ? [{ ...block, postTitle: post.title, postHref: `/front-end/home_page/lazy_cat_bookstore/blogs/${post.slug}` }]
            : [],
    ),
);

export function formatBlogDate(date: string) {
    return new Intl.DateTimeFormat("en-US", {
        dateStyle: "long",
        timeZone: "UTC",
    }).format(new Date(`${date}T00:00:00Z`));
}